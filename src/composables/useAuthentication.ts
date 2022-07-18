import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

import { authenticationService } from 'src/boot/firebase';
import { RegistrationFormValues } from 'src/interfaces/RegistrationFormValues';
import { useRouter } from 'vue-router';
import { useLoading } from './useLoading';
import { useModal } from './useModal';
import { useToast } from './useToast';

export const useAuthentication = () => {
  const router = useRouter();
  const toast = useToast();
  const modal = useModal();
  const loading = useLoading();

  const singup = async (user: RegistrationFormValues) => {
    loading.show();

    const userResult = await createUserWithEmailAndPassword(
      authenticationService,
      user.email,
      user.password
    );

    await updateProfile(userResult.user, {
      displayName: `${user.names} ${user.lastnames}`,
    });

    await sendEmailVerification(userResult.user);

    loading.hide();

    modal.showModal({
      title: 'Verificación de correo',
      message:
        'Se le ha enviado un correo eléctronico para verificar su cuenta',
      onOk: () => router.push('/'),
    });
  };

  const login = async (email: string, password: string) => {
    loading.show();

    const userResult = await signInWithEmailAndPassword(
      authenticationService,
      email,
      password
    );

    loading.hide();

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
