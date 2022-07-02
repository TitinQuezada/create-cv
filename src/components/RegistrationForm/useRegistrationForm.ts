import { RegistrationFormValues } from 'src/interfaces/RegistrationFormValues';
import { ref } from 'vue';

export const useRegistrationForm = () => {
  const registrationFormValues = ref<RegistrationFormValues>({
    names: '',
    lastnames: '',
    confirmEmail: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  return {
    registrationFormValues,
  };
};
