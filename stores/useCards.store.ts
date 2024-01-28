import { countDeckPoints, createDeck } from '~/utils/cards.utils'
import type { deckType } from '~/typings/cards.types'

export const useCardsStore = defineStore('cards', () => {
  const firstPlayerCurrentDeck = ref<deckType>([]);
  const secondPlayerCurrentDeck = ref<deckType>([]);
  const isLoading = ref<boolean>(false);

  const firstPlayerScore = computed<number>(() => countDeckPoints(firstPlayerCurrentDeck.value))
  const secondPlayerScore = computed<number>(() => countDeckPoints(secondPlayerCurrentDeck.value))

  function shuffleDeck () : void {
    const unshuffledDeck = createDeck();
  
    // Create a deep copy of the sourceArray to avoid modifying the original
    const remainingObjects = [...unshuffledDeck];
  
    function processIteration(i : number) {
      // Determine whether to use the first or the second array
      const currentArray = i % 2 === 0 ? firstPlayerCurrentDeck : secondPlayerCurrentDeck;
  
      // Randomly select an object from the remaining objects
      const randomObjectIndex = Math.floor(Math.random() * remainingObjects.length);
      const randomObject = remainingObjects[randomObjectIndex];
  
      // Remove the selected object from the remaining objects
      remainingObjects.splice(randomObjectIndex, 1);
  
      // Add the randomly selected object to the current array
      currentArray.value.push(randomObject);
  
  
      // Check if there are more iterations to process
      if (i < unshuffledDeck.length - 1) {
        // Schedule the next iteration with a small interval
        setTimeout(() => {
          processIteration(i + 1);
        }, 50); 
      } else {
        // All iterations are done, do any final processing here
        isLoading.value = false;
      }
    }
  
    // Start the loop with the first iteration
    processIteration(0);
  }

  function reset(): void {
    firstPlayerCurrentDeck.value = [],
    secondPlayerCurrentDeck.value = [],
    isLoading.value = false
  }

  return {firstPlayerCurrentDeck, secondPlayerCurrentDeck, firstPlayerScore, secondPlayerScore, isLoading, shuffleDeck, reset};
})