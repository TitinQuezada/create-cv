import { useQuasar } from 'quasar';

export const useLoading = () => {
  const { loading } = useQuasar();

  const show = () => loading.show();
  const hide = () => loading.hide();

  return { show, hide };
};
