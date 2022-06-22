<script lang="ts" setup>
import { ref } from '@vue/reactivity';
import { LoginForm } from 'src/interfaces/LoginForm';

const loginForm = ref<LoginForm>({
  user: '',
  password: '',
});
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

      <q-form class="q-gutter-md">
        <q-input
          v-model="loginForm.user"
          label="Usuario"
          lazy-rules
          :rules="[(value) => (value ? true : 'Campo requerido')]"
        />

        <q-input
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

          <q-btn
            outline
            color="primary"
            icon="ion-logo-google"
            class="col-12 q-mb-md"
            label="Sing in with Google"
          />

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
