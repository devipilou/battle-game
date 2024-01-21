import cards from '../constants/cards.constants'
import colors from '../constants/colors.constants'

function createDeck(): Array<object> {
  const deck: Array<object> = [];

  colors.forEach((color) => {
    cards.forEach((card, index) => {
      deck.push({
        fullName: `${card.name} de ${color.name}`,
        shortName: `${card.short} ${color.symbol}`,
        color: color.hexa,
        value: index,
      });
    });
  });

  return deck;
}

export function useShuffleDeck () {
  const unshuffledDeck = createDeck();
  const progress = ref(0)

// Function to fill two arrays alternatively with objects
function fillAlternatingArrays(): [Array<object>, Array<object>] {
  const array1: Array<object> = [];
  const array2: Array<object> = [];

  // Create a deep copy of the sourceArray to avoid modifying the original
  const remainingObjects = [...unshuffledDeck];

  function processIteration(i) {
    // Determine whether to use the first or the second array
    const currentArray = i % 2 === 0 ? array1 : array2;

    // Randomly select an object from the remaining objects
    const randomObjectIndex = Math.floor(Math.random() * remainingObjects.length);
    const randomObject = remainingObjects[randomObjectIndex];

    // Remove the selected object from the remaining objects
    remainingObjects.splice(randomObjectIndex, 1);

    // Add the randomly selected object to the current array
    currentArray.push(randomObject);

    progress.value += 100 / 52;

    // Check if there are more iterations to process
    if (i < unshuffledDeck.length - 1) {
      // Schedule the next iteration with a small interval
      setTimeout(() => {
        processIteration(i + 1);
      }, 50); 
    } else {
      // All iterations are done, do any final processing here
      console.log("Arrays filled:", array1, array2);
      progress.value = 100
    }
  }

  // Start the loop with the first iteration
  processIteration(0);

  return [array1, array2];
}

// Call the function to get two alternatively filled arrays
const [firstPlayerStartingDeck, secondPlayerStartingDeck] = fillAlternatingArrays();

  return {firstPlayerStartingDeck, secondPlayerStartingDeck, progress}
}