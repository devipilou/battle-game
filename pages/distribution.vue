<template>
  <div>
    <h2>Distribution</h2>
    <ProgressBar v-if="isLoading" :value="progress" :show-value="false" />
    <div v-else>
      <h3>Disitribution terminée</h3>
      <div class="list">
        <div>
          <h4>Joueur 1</h4>
          <p v-for="card in firstPlayerStartingDeck" :class="cardClass(card.shortName)">{{ card.shortName }}</p>
        </div>
        <div>
          <h4>Joueur 2</h4>
          <p v-for="card in secondPlayerStartingDeck" :class="cardClass(card.shortName)">{{ card.shortName }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useShuffleDeck } from '../composables/shuffleDeck'

const { firstPlayerStartingDeck, secondPlayerStartingDeck, progress } = useShuffleDeck();
const isLoading = computed(() => {
  return progress.value < 100;
});

function cardClass(shortName) {
  return shortName.includes('\u2660') || shortName.includes('\u2663') ? 'black-card' : 'red-card'
}
</script>

<style scoped>
.list {
  display: flex;
  justify-content: space-around;
}

.red-card {
  color: #FF0000
}

.black-card {
  color: #000000
}
</style>