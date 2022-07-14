<script lang="ts" setup>
import { useExperiences } from './useExperiences';

const { columns, data } = useExperiences();
</script>

<template>
  <q-table :rows="data" :columns="columns" row-key="name">
    <template v-slot:no-data>
      <div class="full-width row flex-center text-primary q-gutter-sm">
        <span> No se han encontrado registros </span>
        <q-icon size="2em" name="warning" />
      </div>
    </template>
  </q-table>
</template>

<style lang="scss" scoped></style>
