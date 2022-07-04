import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { authenticationService } from 'src/boot/firebase';
import { RegistrationFormValues } from 'src/interfaces/RegistrationFormValues';
import { useRouter } from 'vue-router';
import { useModal } from './useModal';
import { useToast } from './useToast';

export const useAuthentication = () => {
  const router = useRouter();
  const toast = useToast();
  const modal = useModal();

  const singup = async (user: RegistrationFormValues) => {
    const userResult = await createUserWithEmailAndPassword(
      authenticationService,
      user.email,
      user.password
    );

    await updateProfile(userResult.user, {
      displayName: `${user.names} ${user.lastnames}`,
    });

    await sendEmailVerification(userResult.user);

    modal.showModal({
      title: 'Verificación de correo',
      message: 'Se le ha enviado un correo para verificar su cuenta',
      onOk: () => router.push('/'),
    });
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
      toast.danger('correo no verificado');
    }
  };

  const googleAuthentication = async () => {
    const provider = new GoogleAuthProvider();

    await signInWithPopup(authenticationService, provider);

    router.push('/home');
  };

  const singout = async () => {
    await signOut(authenticationService);
    router.push('/');
  };

  return { login, singup, googleAuthentication, singout };
};
