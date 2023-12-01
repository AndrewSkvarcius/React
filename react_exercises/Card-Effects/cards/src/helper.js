import { v4 as uuid } from "uuid";

// Selects random element from value arrray;

function choice(values) {
    const random = Math.floor(Math.random() * values.length);
    return values[random];
}

// Format response for deck of cards API

function formatCard(data) {
    console.log("Data received by formatCard:", data);
    if (!data.cards || data.cards.length === 0) {
        console.error('Invalid data: cards array is empty or undefined');
        return null;  // or return a default value
      }
    return {
      image: data.cards[0].image,
      id: uuid()
    };
  }

// Format response data for pokemon API

function formatPokemon(data) {
    return {
        id: uuid(),
        front: data.sprites.front_default,
        back: data.sprites.back_default,
        name: data.name,
        stats: data.stats.map(stat => ({
            value: stat.base_stat,
            name: stat.stat.name
        }))
    };
}

export { choice, formatCard, formatPokemon}