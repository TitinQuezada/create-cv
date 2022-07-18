import { boot } from 'quasar/wrappers';
import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey?.toString(),
  authDomain: import.meta.env.VITE_authDomain?.toString(),
  projectId: import.meta.env.VITE_projectId?.toString(),
  storageBucket: import.meta.env.VITE_storageBucket?.toString(),
  messagingSenderId: import.meta.env.VITE_messagingSenderId?.toString(),
  appId: import.meta.env.VITE_appId?.toString(),
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authenticationService = getAuth(app);
const databaseService = getFirestore(app);
const storageService = getStorage(app);

export { authenticationService, databaseService, storageService };
