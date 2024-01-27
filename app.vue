<template>
  <div>
    <div class="flex align-items-center justify-content-between px-2">
      <h1>Jeu de bataille</h1>
      <Button label="Retour à l'accueil" icon="pi pi-home" severity="secondary" @click="$router.push('/')" />
    </div>
    <NuxtPage class="m-4" />
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss"></style>
