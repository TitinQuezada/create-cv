<script lang="ts" setup>
import { useAuthentication } from '../../composables/useAuthentication';
import { useRegistrationForm } from './useRegistrationForm';

const { singup } = useAuthentication();
const { registrationFormValues } = useRegistrationForm();
</script>

<template>
  <q-card class="form text-primary">
    <q-card-section class="q-pt-none">
      <div class="row">
        <div class="col-12 text-center q-mb-md">
          <q-icon class="icon" name="account_circle" />
        </div>
        <div class="col-12 text-center q-mb-md">
          <span class="text-h4">Registro de usuario</span>
        </div>
      </div>

      <q-form class="q-gutter-xl" v-on:submit="singup(registrationFormValues)">
        <div class="row">
          <q-input
            class="col-12 col-sm-6 q-px-md"
            v-model="registrationFormValues.names"
            label="Nombres"
            lazy-rules
            :rules="[(value) => (value ? true : 'Campo requerido')]"
          />

          <q-input
            class="col-12 col-sm-6 q-px-md"
            v-model="registrationFormValues.lastnames"
            label="Apellidos"
            lazy-rules
            :rules="[(value) => (value ? true : 'Campo requerido')]"
          />

          <q-input
            class="col-12 col-sm-6 q-px-md"
            v-model="registrationFormValues.email"
            label="Correo eléctronico"
            lazy-rules
            :rules="[(value) => (value ? true : 'Campo requerido')]"
          />

          <q-input
            class="col-12 col-sm-6 q-px-md"
            v-model="registrationFormValues.confirmEmail"
            label="Confirmar correo eléctronico"
            lazy-rules
            :rules="[
              (value) => (value ? true : 'Campo requerido'),
              (value) =>
                value == registrationFormValues.email
                  ? true
                  : 'Los correos eléctronicos no coinciden',
            ]"
          />

          <q-input
            type="password"
            class="col-12 col-sm-6 q-px-md"
            v-model="registrationFormValues.password"
            label="Contraseña"
            lazy-rules
            :rules="[(value) => (value ? true : 'Campo requerido')]"
          />

          <q-input
            type="password"
            class="col-12 col-sm-6 q-px-md"
            v-model="registrationFormValues.confirmPassword"
            label="Confirmar contraseña"
            lazy-rules
            :rules="[
              (value) => (value ? true : 'Campo requerido'),
              (value) =>
                value == registrationFormValues.password
                  ? true
                  : 'Las contraseñas no coinciden',
            ]"
          />
        </div>

        <div class="row q-px-sm q-mt-xs">
          <q-btn
            class="col-12"
            label="Registrarse"
            type="submit"
            color="primary"
          />

          <div class="col-12 text-center q-mt-sm">
            <span>¿Ya tiene una cuenta?</span>
            {{ ' ' }}
            <router-link to="/">Iniciar sesión</router-link>
          </div>
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<style lang="scss" scoped>
.form {
  width: 100%;
  max-width: 800px;
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
</style>
