<template>
  <q-form class="form q-gutter-xl q-py-md" @submit="submit">
    <div class="row">
      <div class="col-12 q-px-md q-mb-md title">
        <span class="text-h4">Información Personal</span>
      </div>

      <q-input
        maxlength="30"
        clearable
        class="col-12 col-sm-6 q-px-md"
        label="Nombres"
        placeholder="Joan Manuel"
        v-model="formValues.names"
        lazy-rules
        :rules="formValidations.names"
      />

      <q-input
        maxlength="30"
        clearable
        class="col-12 col-sm-6 q-px-md"
        label="Apellidos"
        v-model="formValues.lastnames"
        lazy-rules
        :rules="formValidations.lastnames"
      />

      <q-input
        maxlength="50"
        clearable
        class="col-12 col-sm-6 q-px-md q-mt-sm"
        label="Profesión"
        v-model="formValues.profession"
        lazy-rules
        :rules="formValidations.profession"
      />

      <div class="row q-px-md q-mt-sm image-container">
        <div class="col-6 col-sm-6">
          <q-file
            clearable
            label="Foto"
            v-model="formValues.photo"
            :rules="formValidations.photo"
            accept=".jpg, .jpeg, .png"
            @update:model-value="handleUpload()"
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" />
            </template>
          </q-file>
        </div>

        <div class="col-6 text-center">
          <q-img
            class="image"
            :src="photoUrl"
            style="height: 150px; max-width: 150px; object-fit: cover"
          ></q-img>
        </div>
      </div>

      <q-input
        maxlength="30"
        clearable
        class="col-12 col-sm-6 q-px-md q-mt-sm"
        label="Nacionalidad"
        v-model="formValues.nationality"
        lazy-rules
        :rules="formValidations.nationality"
      />

      <div class="col-12 col-sm-6 q-px-md q-mt-sm">
        <q-input
          clearable
          label="Fecha de Nacimiento"
          v-model="formValues.bornDate"
          mask="date"
          readonly
          :rules="formValidations.bornDate"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="formValues.bornDate">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>

      <q-input
        maxlength="100"
        clearable
        class="col-12 q-px-md"
        label="Dirección"
        v-model="formValues.address"
        lazy-rules
        :rules="formValidations.address"
      />

      <q-input
        maxlength="10"
        @keypress="onlyNumbers"
        clearable
        class="col-12 col-sm-6 q-px-md"
        label="Teléfono"
        v-model="formValues.phone"
        lazy-rules
        :rules="formValidations.phone"
      />

      <q-input
        maxlength="50"
        clearable
        class="col-12 col-sm-6 q-px-md"
        label="Correo eléctronico"
        v-model="formValues.email"
        lazy-rules
        :rules="formValidations.email"
      />

      <q-input
        maxlength="60"
        clearable
        class="col-12 col-sm-6 q-px-md"
        label="Pagina Web"
        v-model="formValues.webPage"
        lazy-rules
        :rules="formValidations.webPage"
      />
    </div>

    <div class="row justify-end">
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

<script lang="ts" setup>
import { usePersonalInformationForm } from './usePersonalInformationForm';

const {
  submit,
  formValues,
  onlyNumbers,
  formValidations,
  photoUrl,
  handleUpload,
} = usePersonalInformationForm();
</script>

<style lang="scss" scoped>
.form {
  width: 100%;
  max-width: 1300px;
}

.title {
  text-align: left;

  @media screen and (max-width: 599px) {
    text-align: center;
  }
}

.image-container {
  width: 50%;

  @media screen and (max-width: 599px) {
    width: 100%;
  }

  .image {
    border: 1px solid $border;
  }
}
</style>
