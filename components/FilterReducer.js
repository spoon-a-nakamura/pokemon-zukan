import { createContext } from 'react';
import pokemonTypes from '../data/types.json';

// 全体にわたすContext
export const FilterContext = createContext({});

// Reducerを使う時に渡すStateの初期値
export const initialStates = {
  inputSearchWord: '',
  selectedType: 'All',
  setectedPokemonIndex: null,
  isDrawerOpen: false,
};

// Reducerを使う時に渡す関数
export function FilterReducer(state, action) {
  switch (action.type) {
    case 'setInputSearchWord':
      return { ...state, inputSearchWord: action.inputSearchWord };
    case 'setSelectedType':
      return { ...state, selectedType: action.selectedType };
    case 'setSetectedPokemonIndex':
      return {
        ...state,
        setectedPokemonIndex: action.index,
      };
    case 'setIsDrawerOpen':
      return {
        ...state,
        isDrawerOpen: action.isDrawerOpen,
      };
    default:
      return state;
  }
}
