import { useQuasar } from 'quasar';

interface Props {
  title: string;
  message: string;
  onOk?: () => void;
  onCancel?: () => void;
}
export const useModal = () => {
  const { dialog } = useQuasar();

  const showModal = ({ title, message, onOk, onCancel }: Props) => {
    dialog({
      title,
      message,
      persistent: true,
      cancel: !!onCancel,
    })
      .onOk(() => {
        if (onOk) {
          onOk();
        }
      })
      .onCancel(() => {
        if (onCancel) {
          onCancel();
        }
      });
  };

  return { showModal };
};
