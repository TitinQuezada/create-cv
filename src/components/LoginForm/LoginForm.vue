<script lang="ts" setup>
import GoogleButton from 'src/shared/components/GoogleButton.vue';
import { useAuthentication } from '../../composables/useAuthentication';
import { useLoginForm } from './useLoginForm';

const { login } = useAuthentication();
const { loginForm } = useLoginForm();
</script>

<template>
  <q-card class="form text-primary">
    <q-card-section class="q-pt-none">
      <div class="row">
        <div class="col-12 text-center q-mb-md">
          <q-icon class="icon" name="account_circle" />
        </div>
        <div class="col-12 text-center q-mb-md">
          <span class="text-h4">Iniciar sesión</span>
        </div>
      </div>

      <q-form
        class="q-gutter-md"
        @submit="login(loginForm.user, loginForm.password)"
      >
        <q-input
          v-model="loginForm.user"
          label="Usuario"
          lazy-rules
          :rules="[(value) => (value ? true : 'Campo requerido')]"
        />

        <q-input
          type="password"
          v-model="loginForm.password"
          label="Contraseña"
          lazy-rules
          :rules="[(value) => (value ? true : 'Campo requerido')]"
        />

        <div class="row">
          <q-btn
            class="col-12 q-mb-md"
            label="Iniciar sesión"
            type="submit"
            color="primary"
          />

          <google-button extra-class="q-mb-md" />

          <div class="col-12 text-center">
            <span>¿No tienes cuenta?</span>
            {{ ' ' }}
            <router-link to="/singup">Crear cuenta</router-link>
          </div>
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<style lang="scss" scoped>
.form {
  width: 100%;
  max-width: 500px;
  padding: 25px;
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
