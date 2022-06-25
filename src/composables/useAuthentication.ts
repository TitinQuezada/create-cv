import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { authenticationService } from 'src/boot/firebase';
import { Collections } from 'src/enums/Collections';
import { RegistrationFormValues } from 'src/interfaces/RegistrationFormValues';
import { useRouter } from 'vue-router';
import { User } from '../interfaces/User';
import { useRepository } from './useRepository';

export const useAuthentication = () => {
  const userRepository = useRepository<User>(Collections.Users);
  const router = useRouter();

  const singup = async (user: RegistrationFormValues) => {
    const userResult = await createUserWithEmailAndPassword(
      authenticationService,
      user.email,
      user.password
    );

    await sendEmailVerification(userResult.user);

    await userRepository.create({
      names: user.names,
      lastnames: user.lastnames,
      email: user.email,
    });

    router.push('/');
  };

  const login = async (email: string, password: string) => {
    const userResult = await signInWithEmailAndPassword(
      authenticationService,
      email,
      password
    );

    if (userResult.user.emailVerified) {
      router.push('/home');
    } else {
      alert('correo no verificado');
    }
  };

  return { login, singup };
};
