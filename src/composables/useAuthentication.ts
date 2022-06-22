import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { authenticationService, databaseService } from 'src/boot/firebase';
import { RegistrationFormValues } from 'src/interfaces/RegistrationFormValues';
import { useRouter } from 'vue-router';

export const useAuthentication = () => {
  const router = useRouter();

  const singup = async (user: RegistrationFormValues) => {
    const user1 = await createUserWithEmailAndPassword(
      authenticationService,
      user.email,
      user.password
    );

    sendEmailVerification(user1.user);

    await addDoc(collection(databaseService, 'users'), {
      names: user.names,
      lastnames: user.lastnames,
      email: user.email,
    });

    router.push('/home');
  };

  const login = async (email: string, password: string) => {
    const user = await signInWithEmailAndPassword(
      authenticationService,
      email,
      password
    );

    if (user.user.emailVerified) {
      router.push('/home');
    } else {
      alert('correo no verificado');
    }
  };

  return { login, singup };
};
