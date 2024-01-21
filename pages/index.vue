<template>
  <div>
    <h2>Voulez-vous commencer la partie ?</h2>
    <Button label="Distribuer" @click="startDistribution" />
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
function startDistribution() {
  router.push('/distribution')
}

</script>

<style scoped></style>