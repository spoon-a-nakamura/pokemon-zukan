import { createContext } from 'react'
import pokemonTypes from '../data/types.json'
import pokemonData from '../data/pokemon.json'
// import pokemonData from '../data/pokemon_full.json'

// 全体にわたすContext
export const FilterContext = createContext({})

// Reducerを使う時に渡すStateの初期値
export const initialStates = {
  inputSearchWord: null,
  showingPokemonList: pokemonData,
  selectedTypes: [true, ...[...Array(pokemonTypes.length - 1)].fill(false)],
  showDetailPokemonTarget: null,
  isDrawerOpen: false,
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
    case 'setShowDetailPokemonTarget':
      return {
        ...state,
        showDetailPokemonTarget: action.showDetailPokemonTarget,
      }
    case 'setIsDrawerOpen':
      return {
        ...state,
        isDrawerOpen: action.isDrawerOpen,
      }
    default:
      return state
  }
}
