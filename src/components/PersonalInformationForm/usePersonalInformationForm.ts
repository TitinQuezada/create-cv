import { authenticationService } from 'src/boot/firebase';
import { useLoading } from 'src/composables/useLoading';
import { useRepository } from 'src/composables/useRepository';
import { useStorage } from 'src/composables/useStorage';
import { Collections } from 'src/enums/Collections';
import { InputValidations } from 'src/utils/inputValidations';
import { onlyNumbers } from 'src/utils/onlyNumbers';
import { onMounted, ref } from 'vue';
import { useToast } from '../../composables/useToast';

interface FormValues {
  names: string;
  lastnames: string;
  photo: File | null;
  profession: string;
  nationality: string;
  bornDate: string;
  address: string;
  phone: string;
  email: string;
  webPage: string;
}

interface PersonalInformation {
  userId?: string;
  names: string;
  lastnames: string;
  profession: string;
  nationality: string;
  bornDate: string;
  address: string;
  phone: string;
  email: string;
  webPage: string;
}
export const usePersonalInformationForm = () => {
  const { create, getByCurrentUserId, updateByCurrentUserId } =
    useRepository<PersonalInformation>(Collections.PersonalInformation);
  const { uploadPhoto, getPhoto } = useStorage();
  const { success } = useToast();
  const loading = useLoading();

  onMounted(async () => await getData());

  const photoUrl = ref('');
  const isCreated = ref(false);

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

  const getData = async () => {
    loading.show();

    const personalInformation = await getByCurrentUserId();

    if (personalInformation) {
      isCreated.value = true;
      formValues.value = { ...personalInformation, photo: await getPhoto() };
      handleUpload();
    }

    loading.hide();
  };

  const formValidations = {
    names: [
      InputValidations.required,
      InputValidations.trim,
      (value: string) => InputValidations.maxlength(value, 30),
    ],
    lastnames: [
      InputValidations.required,
      InputValidations.trim,
      (value: string) => InputValidations.maxlength(value, 30),
    ],
    photo: [
      InputValidations.required,
      (value: File) => InputValidations.maxSize(value, 10),
    ],
    profession: [
      InputValidations.required,
      InputValidations.trim,
      (value: string) => InputValidations.maxlength(value, 50),
    ],
    nationality: [
      InputValidations.required,
      InputValidations.trim,
      (value: string) => InputValidations.maxlength(value, 30),
    ],
    bornDate: [InputValidations.required],
    address: [
      InputValidations.required,
      InputValidations.trim,
      (value: string) => InputValidations.maxlength(value, 100),
    ],
    phone: [
      InputValidations.required,
      InputValidations.trim,
      (value: string) => InputValidations.minlength(value, 10),
      (value: string) => InputValidations.maxlength(value, 15),
    ],
    email: [
      InputValidations.required,
      InputValidations.trim,
      InputValidations.email,
      (value: string) => InputValidations.maxlength(value, 50),
    ],
    webPage: [
      InputValidations.required,
      InputValidations.trim,
      InputValidations.url,
      (value: string) => InputValidations.maxlength(value, 60),
    ],
  };

  const submit = async () => {
    loading.show();

    if (authenticationService.currentUser && formValues.value.photo) {
      await uploadPhoto(formValues.value.photo);

      const personalInformation = buildPersonalInformation();
      isCreated.value
        ? await updateByCurrentUserId(personalInformation)
        : await create(personalInformation);

      success('Guardado con éxito');
    }

    loading.hide();
  };

  const buildPersonalInformation = (): PersonalInformation => {
    return {
      userId: authenticationService.currentUser?.uid,
      names: formValues.value.names,
      lastnames: formValues.value.lastnames,
      profession: formValues.value.profession,
      address: formValues.value.address,
      bornDate: formValues.value.bornDate,
      email: formValues.value.email,
      nationality: formValues.value.nationality,
      phone: formValues.value.phone,
      webPage: formValues.value.webPage,
    };
  };

  const handleUpload = async () => {
    if (formValues.value.photo) {
      const arrayBuffer = await formValues.value.photo.arrayBuffer();
      const blob = new Blob([arrayBuffer]);

      photoUrl.value = URL.createObjectURL(blob);
    } else {
      photoUrl.value = '';
    }
  };

  return {
    submit,
    formValues,
    onlyNumbers,
    formValidations,
    photoUrl,
    handleUpload,
  };
};
