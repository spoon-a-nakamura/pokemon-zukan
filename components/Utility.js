import { useMemo } from 'react';
import data from '../data/pokemon_full.json';

// Framer 共通トランジション
export const animationProps = {
  transition: {
    duration: 0.4,
    delay: 0,
    ease: 'easeInOut',
  },
  initial: { opacity: 0.6, scale: 0.6 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0 },
  whileHover: { mini: { scale: 1.1 }, big: { scale: 1.3 } },
};

// zeroPadding
export function zeroPadding(id) {
  return `${id}`.padStart(3, '0');
}

function toHiragana(value) {
  return value.replace(/[\u30a1-\u30f6]/g, (match) => {
    const code = match.charCodeAt(0) - 0x60;
    return String.fromCharCode(code);
  });
}

function toKatakana(value) {
  return value.replace(/[\u3041-\u3096]/g, (match) => {
    const code = match.charCodeAt(0) + 0x60;
    return String.fromCharCode(code);
  });
}

function filterPokemon(pokemonData, s, type = 'All') {
  const pokemonListFilteredByType =
    type !== 'All'
      ? pokemonData.filter((pokemon) => pokemon.type.includes(type))
      : pokemonData;

  if (!s) return pokemonListFilteredByType;
  const words = [toHiragana(s), toKatakana(s)];

  return pokemonListFilteredByType.filter((pokemon) => {
    return words.some((word) => pokemon.name.japanese.includes(word));
  });
}

export function useFilteredPokemonList(s, type = 'All') {
  return useMemo(() => filterPokemon(data, s, type), [s, type]);
}
