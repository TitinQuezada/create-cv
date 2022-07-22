<template>
  <q-form class="form q-gutter-xl q-py-md" @submit="submit">
    <div class="row">
      <div class="col-12 q-px-md q-mb-md title">
        <span class="text-h4">Experiencia</span>
      </div>

      <q-input
        maxlength="30"
        clearable
        class="col-12 col-sm-6 q-px-md"
        label="Titulo"
        placeholder="Desarrollador de software"
        v-model="formValues.title"
        lazy-rules
        :rules="formValidations.title"
      />

      <q-input
        maxlength="30"
        clearable
        class="col-12 col-sm-6 q-px-md"
        label="Empresa"
        placeholder="Wepsys SRL"
        v-model="formValues.business"
        lazy-rules
        :rules="formValidations.business"
      />

      <q-input
        maxlength="100"
        clearable
        class="col-12 q-px-md"
        label="Direción"
        placeholder="Calle D #67"
        v-model="formValues.address"
        lazy-rules
        :rules="formValidations.address"
      />

      <div class="col-12 col-sm-6 q-px-md q-mt-sm">
        <q-input
          clearable
          label="Fecha de Inicio"
          v-model="formValues.startDate"
          mask="date"
          readonly
          :rules="formValidations.startDate"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="formValues.startDate">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>

      <div class="col-12 col-sm-6 q-px-md q-mt-sm">
        <q-input
          clearable
          label="Fecha de Finalización"
          v-model="formValues.endDate"
          mask="date"
          readonly
          :rules="formValidations.endDate"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="formValues.endDate">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
    </div>

    <q-input
      type="textarea"
      filled
      maxlength="200"
      clearable
      class="col-12 q-px-md"
      label="Descripción"
      placeholder="Encargado de desarrollar software para la empresa"
      v-model="formValues.description"
      lazy-rules
      :rules="formValidations.description"
    />

    <div class="row justify-end q-mx-sm|-md">
      <q-btn
        class="col-12 col-sm-2 q-mr-sm-md q-mb-sm q-mb-sm-none"
        label="Ver CV"
        color="secondary"
      />
      <q-btn
        class="col-12 col-sm-2"
        label="Guardar"
        type="submit"
        color="primary"
      />
    </div>
  </q-form>
</template>

<script setup lang="ts">
import { useExperiences } from './useExperiences';

const { formValues, formValidations, submit } = useExperiences();
</script>

<style scoped></style>
