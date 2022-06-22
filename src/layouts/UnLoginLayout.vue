<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container class="container q-pa-md">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="scss" scoped>
.container {
  background-image: url('../../public/images/fondo-azul.png');
  background-size: cover;
}
</style>
