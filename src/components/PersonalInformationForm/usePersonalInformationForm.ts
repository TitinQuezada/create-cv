import { onlyNumbers } from 'src/utils/onlyNumbers';
import { ref } from 'vue';
interface FormValues {
  names: string;
  lastnames: string;
  photo: any;
  profession: string;
  nationality: string;
  bornDate: string;
  address: string;
  phone: string;
  email: string;
  webPage: string;
}
export const usePersonalInformationForm = () => {
  const formValues = ref<FormValues>({
    names: '',
    lastnames: '',
    photo: null,
    profession: '',
    nationality: '',
    bornDate: '',
    address: '',
    phone: '',
    email: '',
    webPage: '',
  });

  const requiredMessage = 'Campo requerido';

  const formValidations = {
    names: [(value: string) => (value ? true : requiredMessage)],
    lastnames: [(value: string) => (value ? true : requiredMessage)],
    photo: [(value: string) => (value ? true : requiredMessage)],
    profession: [(value: string) => (value ? true : requiredMessage)],
    nationality: [(value: string) => (value ? true : requiredMessage)],
    bornDate: [(value: string) => (value ? true : requiredMessage)],
    address: [(value: string) => (value ? true : requiredMessage)],
    phone: [(value: string) => (value ? true : requiredMessage)],
    email: [(value: string) => (value ? true : requiredMessage)],
    webPage: [(value: string) => (value ? true : requiredMessage)],
  };

  const submit = () => {
    alert(JSON.stringify(formValues.value));
  };

  return { submit, formValues, onlyNumbers, formValidations };
};
