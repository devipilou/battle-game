import cards from '../constants/cards.constants'
import colors from '../constants/colors.constants'

import type { deckType } from '../typings/cards.types'

export function createDeck(): deckType {
  const deck: deckType = [];

  colors.forEach((color) => {
    cards.forEach((card, index) => {
      deck.push({
        fullName: `${card.name} de ${color.name}`,
        shortName: `${card.short} ${color.symbol}`,
        color: color.symbol,
        value: index,
      });
    });
  });

  return deck;
}

export function cardClass(shortName: string): string {
  return shortName.includes('\u2660') || shortName.includes('\u2663') ? 'black-card' : 'red-card'
}

export function countDeckPoints(deck: deckType): number {
  let score = 0;

  deck.forEach((card) => {
    score += card.value
  })

  return score;
}