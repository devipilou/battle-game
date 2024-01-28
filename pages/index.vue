<template>
  <div>
    <h2>Voulez-vous commencer la partie ?</h2>
    <Button label="Distribuer" icon="pi pi-play" @click="distribute" />
  </div>
</template>

<script setup lang="ts">
const cardStore = useCardsStore()
const router = useRouter()
function distribute() {
  cardStore.$patch({
    isLoading: true
  })
  router.push('/distribution');
}
</script>

<style scoped></style>