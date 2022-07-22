<script lang="ts" setup>
import ExperiencesTable from 'src/components/Experiences/ExperiencesTable.vue';
import ExperienceForm from 'src/components/Experiences/ExperienceForm.vue';
import ExperiencesCarousel from 'src/components/Experiences/ExperiencesCarousel.vue';
</script>

<template>
  <q-page class="q-mx-md">
    <div class="q-mt-lg q-mb-lg">
      <span class="text-h4">Experiencias</span>
    </div>

    <experiences-carousel />
    <!-- <experiences-table ref="table" /> -->

    <experience-form />
  </q-page>
</template>

<style lang="scss" scoped></style>
