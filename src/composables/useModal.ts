import { useQuasar } from 'quasar';

interface Props {
  title: string;
  message: string;
  onOk?: () => void;
}
export const useModal = () => {
  const { dialog } = useQuasar();

  const showModal = ({ title, message, onOk }: Props) => {
    dialog({
      title,
      message,
      persistent: true,
    }).onOk(() => {
      if (onOk) {
        onOk();
      }
    });
  };
  return { showModal };
};
