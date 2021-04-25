import { createSlice } from '@reduxjs/toolkit'

// Slice
export const pokemonSlice = createSlice({
  name: 'pokemon',
  // Stateの初期値を設定
  initialState: {
    pokemonList: [...Array(pokemonData.length)].fill(false),
  },
  // 状態を更新する関数を定義する場所
  reducers: {
    show(state, action) {
      return {
        ...state,
        pokemonList: [...state.pokemonList, { text: action.payload.text }],
      }
    },
  },
})

// reducersに定義した処理を呼び出すActionをexportする
export const { changeText, add } = pokemonSlice.actions

// 現在のcountの値を取得するためのSelectorをexportする
export const selectInputText = ({ pokemon }) => pokemon.inputText
export const selectpokemonList = ({ pokemon }) => pokemon.pokemonList

// お作法としてdefault exportでreducerをexport
export default pokemonSlice.reducer
