import { useQuasar } from 'quasar';

export const useToast = () => {
  const quasar = useQuasar();

  const danger = (message: string) => {
    quasar.notify({ message, type: 'negative', progress: true });
  };

  const success = (message: string) => {
    quasar.notify({ message, type: 'positive', progress: true });
  };

  return { danger, success };
};
