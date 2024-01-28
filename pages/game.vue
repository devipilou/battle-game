<template>
  <div>
    <p>{{ cardStore.firstPlayerScore }}</p>
    <p>{{ cardStore.secondPlayerScore }}</p>
  </div>
</template>

<script setup lang="ts">
const cardStore = useCardsStore();

</script>

<style scoped></style>