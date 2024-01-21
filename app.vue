<template>
  <div>
    <h1>Jeu de bataille</h1>
    <NuxtPage class="app-body" />
    <Button label="Retour à l'accueil" icon="pi pi-home" severity="secondary" @click="returnHome" />
  </div>
</template>
<script setup lang="ts">
const router = useRouter();
function returnHome() {
  router.push('/')
} 
</script>
<style lang="scss">
.app-body {
  margin: 1rem;
}
</style>
