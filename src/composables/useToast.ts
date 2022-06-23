import { useQuasar } from 'quasar';

export const useToast = () => {
  const quasar = useQuasar();

  const danger = (message: string) => {
    quasar.notify({ message, color: 'red' });
  };

  return { danger };
};
