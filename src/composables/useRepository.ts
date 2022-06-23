import { addDoc, collection } from 'firebase/firestore';
import { databaseService } from 'src/boot/firebase';
import { Collections } from '../enums/Collections';
import { useToast } from './useToast';

export const useRepository = <T>(collectionName: Collections) => {
  const toast = useToast();

  const create = async (document: T) => {
    await addDoc(collection(databaseService, collectionName), document);
    toast.danger('error grandioso');
  };

  return { create };
};
