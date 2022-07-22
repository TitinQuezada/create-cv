import {
  addDoc,
  collection,
  deleteDoc,
  getDocs,
  query,
  updateDoc,
  where,
  doc,
} from 'firebase/firestore';
import { authenticationService, databaseService } from 'src/boot/firebase';
import { Collections } from '../enums/Collections';

export const useRepository = <T>(collectionName: Collections) => {
  const create = async (document: T) => {
    await addDoc(collection(databaseService, collectionName), document);
  };

  const deleteById = async (documentId: string) => {
    await deleteDoc(doc(databaseService, collectionName, documentId));
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

  const getAllByCurrentUserId = async (): Promise<Array<T>> => {
    const data: Array<T> = [];

    const q = query(
      collection(databaseService, collectionName),
      where('userId', '==', authenticationService.currentUser?.uid)
    );

    const querySnapshot = await getDocs(q);

    querySnapshot.docs.forEach(async (doc) => {
      data.push({ id: doc.id, ...doc.data() } as T extends { id?: string }
        ? T
        : never);
    });

    return data;
  };

  return {
    create,
    getByCurrentUserId,
    updateByCurrentUserId,
    getAllByCurrentUserId,
    deleteById,
  };
};
