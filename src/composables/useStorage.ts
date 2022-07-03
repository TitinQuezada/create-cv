import { getDownloadURL, ref, uploadBytes, getBlob } from 'firebase/storage';
import { authenticationService, storageService } from 'src/boot/firebase';

export const useStorage = () => {
  const uploadPhoto = async (document: File) => {
    const storage = ref(
      storageService,
      `photos/${authenticationService.currentUser?.uid}.jpg`
    );

    const arrayBuffer = await document.arrayBuffer();
    const blob = new Blob([arrayBuffer]);

    await uploadBytes(storage, blob);
  };

  const getPhoto = async (): Promise<File> => {
    const blob = await getBlob(
      ref(
        storageService,
        `photos/${authenticationService.currentUser?.uid}.jpg`
      )
    );

    return new File([blob], 'Foto.jpg');
  };

  return { uploadPhoto, getPhoto };
};
