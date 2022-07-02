import { LoginForm } from 'src/interfaces/LoginForm';
import { ref } from 'vue';

export const useLoginForm = () => {
  const loginForm = ref<LoginForm>({
    user: '',
    password: '',
  });

  return { loginForm };
};
