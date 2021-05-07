import { createContext } from 'react'
import pokemonData from '../data/pokemon.json'
import pokemonTypes from '../data/types.json'

// 全体にわたすContext
export const FilterContext = createContext({})

// Reducerを使う時に渡すStateの初期値
export const initialStates = {
  inputSearchWord: '',
  showingPokemonList: pokemonData,
  selectedTypes: [...Array(pokemonTypes.length)].fill(false),
}

// Reducerを使う時に渡す関数
export function FilterReducer(state, action) {
  switch (action.type) {
    case 'setInputSearchWord':
      return { ...state, inputSearchWord: action.inputSearchWord }
    case 'setShowingPokemonList':
      return { ...state, showingPokemonList: action.showingPokemonList }
    case 'setSelectedTypes':
      return { ...state, selectedTypes: action.selectedTypes }
    default:
      return state
  }
}
