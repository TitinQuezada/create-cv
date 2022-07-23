<script lang="ts" setup>
import ExperienceForm from 'src/components/Experiences/ExperienceForm.vue';
import ExperiencesCarousel from 'src/components/Experiences/ExperiencesCarousel.vue';
</script>

<template>
  <q-page class="q-mx-md">
    <div class="q-mt-lg q-mb-lg">
      <span class="text-h4">Experiencias</span>
    </div>

    <experiences-carousel />
    <experience-form />
  </q-page>
</template>

<style lang="scss" scoped></style>
