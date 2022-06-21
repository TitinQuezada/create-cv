<script lang="ts" setup>
import { ref } from '@vue/reactivity';
import { RegistrationFormValues } from '../interfaces/RegistrationFormValues';

const registrationFormValues = ref<RegistrationFormValues>({
  names: '',
  lastnames: '',
  confirmEmail: '',
  email: '',
  password: '',
  confirmPassword: '',
});
</script>

<template>
  <div class="form">
    <div class="row">
      <div class="col-12 text-center q-mb-md">
        <q-icon class="icon" name="account_circle" />
      </div>
      <div class="col-12 text-center q-mb-md">
        <span class="text-h4">Registro de usuario</span>
      </div>
    </div>

    <q-form class="q-gutter-md">
      <div class="row">
        <q-input
          class="col-12 col-sm-6 q-pa-sm"
          filled
          v-model="registrationFormValues.names"
          label="Nombres"
          lazy-rules
          :rules="[(value) => value || 'Campo requerido']"
        />

        <q-input
          class="col-12 col-sm-6 q-pa-sm"
          filled
          v-model="registrationFormValues.lastnames"
          label="Apellidos"
          lazy-rules
          :rules="[(value) => value || 'Campo requerido']"
        />

        <q-input
          class="col-12 col-sm-6 q-pa-sm"
          filled
          v-model="registrationFormValues.email"
          label="Correo eléctronico"
          lazy-rules
          :rules="[(value) => value || 'Campo requerido']"
        />

        <q-input
          class="col-12 col-sm-6 q-pa-sm"
          filled
          v-model="registrationFormValues.confirmEmail"
          label="Confirmar correo eléctronico"
          lazy-rules
          :rules="[(value) => value || 'Campo requerido']"
        />

        <q-input
          class="col-12 col-sm-6 q-pa-sm"
          filled
          v-model="registrationFormValues.password"
          label="Contraseña"
          lazy-rules
          :rules="[(value) => value || 'Campo requerido']"
        />

        <q-input
          class="col-12 col-sm-6 q-pa-sm"
          filled
          v-model="registrationFormValues.confirmPassword"
          label="Confirmar contraseña"
          lazy-rules
          :rules="[(value) => value || 'Campo requerido']"
        />

        <q-input
          class="col-12 col-sm-6 q-pa-sm"
          filled
          v-model="registrationFormValues.confirmPassword"
          label="Confirmar contraseña"
          lazy-rules
          :rules="[(value) => value || 'Campo requerido']"
        />

        <q-input
          class="col-12 col-sm-6 q-pa-sm"
          filled
          v-model="registrationFormValues.confirmPassword"
          label="Confirmar contraseña"
          lazy-rules
          :rules="[(value) => value || 'Campo requerido']"
        />

        <q-input
          class="col-12 col-sm-6 q-pa-sm"
          filled
          v-model="registrationFormValues.confirmPassword"
          label="Confirmar contraseña"
          lazy-rules
          :rules="[(value) => value || 'Campo requerido']"
        />
      </div>

      <div class="row">
        <q-btn
          class="col-12 q-pa-sm"
          label="Registrarse"
          type="submit"
          color="primary"
        />
      </div>
    </q-form>
  </div>
</template>

<style lang="scss" scoped>
.form {
  width: 100%;
  max-width: 1000px;
  padding: 25px;
  border: $border solid 1px;
  border-radius: 15px;

  @media screen and (max-width: 600px) {
    border: none;
    border-radius: none;
  }
}
.icon {
  font-size: 100px;
}
body {
  background-color: red;
}
</style>
