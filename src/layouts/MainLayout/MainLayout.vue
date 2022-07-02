<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>Crear Curriculum Vitae </q-toolbar-title>

        <div>{{ userFullName }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <q-item clickable>
          <q-item-section avatar>
            <q-icon name="person" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Información de contacto</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable>
          <q-item-section avatar>
            <q-icon name="work_history" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Experiencia</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable>
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Educación</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable>
          <q-item-section avatar>
            <q-icon name="list" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Habilidades</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable>
          <q-item-section avatar>
            <q-icon name="g_translate" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Idiomas</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable @click="singout">
          <q-item-section avatar>
            <q-icon name="logout" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Cerrar sessión</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import { useAuthentication } from '../../composables/useAuthentication';
import { useMainLayout } from './useMainLayout';

const { singout } = useAuthentication();
const { leftDrawerOpen, toggleLeftDrawer, userFullName } = useMainLayout();
</script>
