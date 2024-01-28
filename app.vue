<template>
  <div>
    <div class="flex align-items-center justify-content-between px-2">
      <h1>Jeu de bataille</h1>
      <Button label="Retour à l'accueil" icon="pi pi-home" severity="secondary" @click="resetGame" />
    </div>
    <NuxtPage class="m-4" />
  </div>
</template>
<script setup lang="ts">
const router = useRouter()
const cardStore = useCardsStore()

function resetGame() {
  cardStore.reset();
  router.push('/')
}
</script>
<style scoped lang="scss"></style>
