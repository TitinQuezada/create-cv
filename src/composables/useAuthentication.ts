import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithCredential,
} from 'firebase/auth';

import { authenticationService } from 'src/boot/firebase';
import { RegistrationFormValues } from 'src/interfaces/RegistrationFormValues';
import { useRouter } from 'vue-router';
import { useLoading } from './useLoading';
import { useModal } from './useModal';
import { useToast } from './useToast';
// import '../../src-capacitor/node_modules/@codetrix-studio/capacitor-google-auth';
// import { Plugins } from '../../src-capacitor/node_modules/@capacitor/core';

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
    loading.show();

    // const {
    //   authentication: { idToken },
    // } = await Plugins.GoogleAuth.signIn();

    // const googleCredentials = GoogleAuthProvider.credential(idToken);

    // await signInWithCredential(authenticationService, googleCredentials);

    // router.push('/home');

    loading.hide();
  };

  const singout = async () => {
    await signOut(authenticationService);
    router.push('/');
  };

  return { login, singup, googleAuthentication, singout };
};
