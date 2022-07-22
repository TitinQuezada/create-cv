import { authenticationService } from 'src/boot/firebase';
import { useLoading } from 'src/composables/useLoading';
import { useModal } from 'src/composables/useModal';
import { useRepository } from 'src/composables/useRepository';
import { useToast } from 'src/composables/useToast';
import { Collections } from 'src/enums/Collections';
import { Experience } from 'src/interfaces/Experience';
import { InputValidations } from 'src/utils/inputValidations';
import { onMounted, ref } from 'vue';

interface ExperienceColumns {
  name: string;
  align: 'center' | 'left' | 'right';
  label: string;
  field: string;
  sortable: boolean;
}

export const useExperiences = () => {
  const { create, getAllByCurrentUserId, deleteById } =
    useRepository<Experience>(Collections.Experiences);
  const loading = useLoading();
  const { success } = useToast();
  const isCarouselAutoPlaying = ref(true);
  const { showModal } = useModal();

  onMounted(async () => await getData());

  const columns: Array<ExperienceColumns> = [
    {
      name: 'title',
      align: 'left',
      label: 'Titulo',
      field: 'title',
      sortable: true,
    },
    {
      name: 'business',
      align: 'left',
      label: 'Empresa',
      field: 'business',
      sortable: true,
    },
    {
      name: 'address',
      align: 'left',
      label: 'Dirección',
      field: 'address',
      sortable: true,
    },
    {
      name: 'startDate',
      align: 'left',
      label: 'Fecha de Inicio',
      field: 'startDate',
      sortable: true,
    },
    {
      name: 'endDate',
      align: 'left',
      label: 'Fecha de Finalización',
      field: 'endDate',
      sortable: true,
    },
    {
      name: 'description',
      align: 'left',
      label: 'Descripción',
      field: 'description',
      sortable: true,
    },
  ];

  const data = ref<Array<Experience>>([]);

  const formValidations = {
    title: [
      InputValidations.required,
      InputValidations.trim,
      (value: string) => InputValidations.maxlength(value, 30),
    ],
    business: [
      InputValidations.required,
      InputValidations.trim,
      (value: string) => InputValidations.maxlength(value, 30),
    ],
    address: [
      InputValidations.required,
      InputValidations.trim,
      (value: string) => InputValidations.maxlength(value, 60),
    ],
    description: [
      InputValidations.required,
      InputValidations.trim,
      (value: string) => InputValidations.maxlength(value, 100),
    ],
    startDate: [InputValidations.required],
    endDate: [InputValidations.required],
  };

  const formValues = ref<Experience>({} as Experience);

  const getData = async () => {
    loading.show();
    data.value = await getAllByCurrentUserId();
    loading.hide();
  };

  const submit = async () => {
    loading.show();
    await create({
      ...formValues.value,
      userId: authenticationService.currentUser?.uid,
    });
    success('Experiencia guardada con éxito');
    loading.hide();
  };

  const deleteExperience = async (experienceId: string) => {
    loading.show();
    await deleteById(experienceId);
    success('Experiencia eliminada con éxito');
    loading.hide();
  };

  const handleDelete = (experienceId: string) => {
    showModal({
      title: 'Eliminar Experiencia',
      message: '¿Estas seguro de eliminar esta experiencia?',
      onOk: async () => {
        await deleteExperience(experienceId);
        await getData();
      },
      onCancel: () => {
        console.log(experienceId);
      },
    });
  };

  return {
    columns,
    data,
    formValues,
    formValidations,
    submit,
    isCarouselAutoPlaying,
    handleDelete,
  };
};
