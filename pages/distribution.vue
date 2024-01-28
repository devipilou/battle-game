<template>
  <div>
    <h2>Distribution</h2>
    <ProgressSpinner v-if="cardStore.isLoading" />
    <div v-else>
      <h3>Disitribution terminée</h3>
      <Button label="Redistribuer" icon="pi pi-replay" @click="restartGame" severity="secondary"
        v-if="!cardStore.isLoading" class="mr-2" />
      <Button label="Commencer" icon="pi pi-play" @click="startGame" severity="primary" v-if="!cardStore.isLoading" />
    </div>
    <div class="grid">
      <div class="col-6">
        <h4>Joueur 1</h4>
        <p>{{ cardStore.firstPlayerCurrentDeck.length }} carte(s) - {{ cardStore.firstPlayerScore }} point(s)</p>
        <p v-for="card in cardStore.firstPlayerCurrentDeck" :class="cardClass(card.shortName)"
          class="inline-flex mr-1 border-solid border-round px-1 py-3">{{
            card.shortName }}</p>
      </div>
      <div class="col-6">
        <h4>Joueur 2</h4>
        <p>{{ cardStore.secondPlayerCurrentDeck.length }} carte(s) - {{ cardStore.secondPlayerScore }} point(s)</p>
        <p v-for="card in cardStore.secondPlayerCurrentDeck" :class="cardClass(card.shortName)"
          class="inline-flex mr-1 border-solid border-round px-1 py-3">
          {{
            card.shortName }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { cardClass } from '~/utils/cards.utils'

const cardStore = useCardsStore();

cardStore.shuffleDeck();

function startGame() {
  console.log('start')
}

function restartGame() {
  cardStore.reset();
  cardStore.$patch({
    isLoading: true,
  })
  cardStore.shuffleDeck();

}

</script>

<style scoped>
.red-card {
  color: #FF0000
}

.black-card {
  color: #000000
}
</style>