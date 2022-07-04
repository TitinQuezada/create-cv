import { FirebaseError } from 'firebase/app';
import { boot } from 'quasar/wrappers';

const getErrorMessage = (errorCode: string): string => {
  switch (errorCode) {
    case 'auth/email-already-in-use':
      return 'El correo eléctronico ya se encuentra en uso.';

    case 'auth/invalid-email':
      return 'Usuario o contraseña invalido';

    case 'auth/email-already-in-use':
      return 'El correo eléctronico ya se encuentra en uso.';

    case 'auth/weak-password':
      return 'Contraseña insegura';

    case 'auth/user-disabled':
      return 'Usuario deshabilitado';

    case 'auth/user-not-found':
      return 'Usuario o contraseña invalido';

    case 'auth/wrong-password':
      return 'Usuario o contraseña invalido';

    case 'auth/operation-not-allowed':
      return 'Usuario deshabilitado';

    default:
      return 'Error inesperado';
  }
};

export default boot(({ app }) => {
  app.config.errorHandler = function (err) {
    const firebaseError: FirebaseError = err as FirebaseError;

    console.error(err);

    app.config.globalProperties.$q.loading.hide();

    app.config.globalProperties.$q.notify({
      progress: true,
      type: 'negative',
      message: getErrorMessage(firebaseError.code),
    });
  };
});
