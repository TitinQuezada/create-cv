<template>
  <a :class="`row ${extraClass}`" @click="googleAuthentication">
    <div class="col-2 bg-white google-logo-container flex flex-center">
      <img src="../../../public/images/Google__G__Logo.svg" />
    </div>

    <div class="col-10 flex flex-center">
      <span class="text-white">Sign in with Google</span>
    </div>
  </a>
</template>

<script setup>
import { useAuthentication } from '../../composables/useAuthentication';

const { googleAuthentication } = useAuthentication();

defineProps({
  extraClass: String,
});
</script>

<style lang="scss" scoped>
a {
  border: 1px solid $blue-google;
  color: white;
  width: 100%;
  background-color: $blue-google;
  height: 35px;
  cursor: pointer;
}

.google-logo-container {
  max-width: 40px;
  height: 100%;
}
</style>
