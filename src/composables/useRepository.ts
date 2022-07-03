import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { authenticationService, databaseService } from 'src/boot/firebase';
import { Collections } from '../enums/Collections';

export const useRepository = <T>(collectionName: Collections) => {
  const create = async (document: T) => {
    await addDoc(collection(databaseService, collectionName), document);
  };

  const getByCurrentUserId = async (): Promise<T | undefined> => {
    const q = query(
      collection(databaseService, collectionName),
      where('userId', '==', authenticationService.currentUser?.uid)
    );

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (doc) => {
      await updateDoc(doc.ref, {});
    });

    if (querySnapshot.empty) {
      return undefined;
    }

    return querySnapshot.docs[0].data() as T;
  };

  const updateByCurrentUserId = async (entity: T) => {
    const queryResult = query(
      collection(databaseService, collectionName),
      where('userId', '==', authenticationService.currentUser?.uid)
    );

    const querySnapshot = await getDocs(queryResult);

    querySnapshot.forEach(async (document) => {
      await updateDoc(document.ref, entity);
    });
  };

  return { create, getByCurrentUserId, updateByCurrentUserId };
};
