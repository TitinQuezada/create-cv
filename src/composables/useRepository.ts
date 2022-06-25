import { addDoc, collection } from 'firebase/firestore';
import { databaseService } from 'src/boot/firebase';
import { Collections } from '../enums/Collections';

export const useRepository = <T>(collectionName: Collections) => {
  const create = async (document: T) => {
    await addDoc(collection(databaseService, collectionName), document);
  };

  return { create };
};
