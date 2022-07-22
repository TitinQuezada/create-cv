<template>
  <q-carousel
    v-model="slide"
    transition-prev="jump-right"
    transition-next="jump-left"
    swipeable
    animated
    control-color="white"
    prev-icon="arrow_left"
    next-icon="arrow_right"
    navigation-icon="radio_button_unchecked"
    navigation
    padding
    arrows
    height="300px"
    class="carousel text-white shadow-1 rounded-borders"
    infinite
    :autoplay="isCarouselAutoPlaying"
    @mouseenter="isCarouselAutoPlaying = false"
    @mouseleave="isCarouselAutoPlaying = true"
  >
    <q-carousel-slide
      v-for="(experience, index) in data"
      :key="index"
      :name="index"
      class="column no-wrap flex-center"
    >
      <div class="text-right" style="width: 100%">
        <q-btn
          round
          color="negative"
          icon="delete_forever"
          @click="handleDelete(experience.id!)"
        />
      </div>

      <q-icon name="work" size="56px" />
      <div class="q-mt-md text-center">
        <span class="text-h4 d-block">{{ experience.title }}</span>
        <span class="text-h6 block"> {{ experience.business }} </span>
        <span class="block">
          {{ formatDateToMMYYYY(experience.startDate) }}
          -
          {{ formatDateToMMYYYY(experience.endDate) }}
        </span>
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<script setup lang="ts">
import { formatDateToMMYYYY } from 'src/utils/formatDate';
import { ref } from 'vue';
import { useExperiences } from './useExperiences';

const slide = ref(0);
const { data, isCarouselAutoPlaying, handleDelete } = useExperiences();
</script>

<style lang="scss" scoped>
.carousel {
  background-color: $carousel;
}
</style>
