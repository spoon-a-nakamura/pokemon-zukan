import { useContext } from 'react'
import styled from '@emotion/styled'
import { FilterContext } from './FilterReducer'
import pokemonTypes from '../data/types.json'
// import pokemonData from '../data/pokemon.json'
import pokemonData from '../data/pokemon_full.json'

export default function SearchTypes() {
  console.log('Render SearchTypes')
  const { state, dispatch } = useContext(FilterContext)

  // 表示用のState：選択した属性をBooleanで管理
  const newSelectedState = (index) => {
    return state.selectedTypes.map((state, innerIndex) =>
      index === innerIndex ? true : false
    )
  }

  // フィルタ用のState：選択した属性の配列を返す
  const filterSelectedType = (e) => {
    // 選択した属性のオブジェクトを取得
    const selectedTypeName = pokemonTypes.filter((type) => {
      return type.japanese === e.target.textContent && type
    })
    // 上記で取得したオブジェクトの英語名を取得
    const selectedTypeEnglishName = selectedTypeName[0].english

    // 現在の表示されているリストからさらに指定した属性で絞り込み
    if (e.target.textContent === 'すべて') {
      return pokemonData
    } else {
      return pokemonData.filter(
        (value) => value.type.includes(selectedTypeEnglishName) && value
      )
    }
  }

  // リセット用のState
  const resetSearchField = () => {
    return null
  }

  return (
    <Container>
      <ListWrapper>
        {pokemonTypes.map((type, index) => (
          <List
            key={index}
            onClick={(e) => {
              dispatch({
                type: 'setSelectedTypes',
                selectedTypes: newSelectedState(index),
              })
              dispatch({
                type: 'setShowingPokemonList',
                showingPokemonList: filterSelectedType(e),
              })
              dispatch({
                type: 'setInputSearchWord',
                inputSearchWord: resetSearchField(),
              })
            }}
            selectedTypes={state.selectedTypes[index]}
          >
            {type.japanese}
          </List>
        ))}
      </ListWrapper>
    </Container>
  )
}

const Container = styled.div``
const ListWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 90px;
  margin: 10px auto 0;
`
const List = styled.li`
  font-size: 12px;
  font-weight: bold;
  padding: 10px 15px 7px;
  margin-bottom: 5px;
  border-radius: 20px;
  cursor: pointer;
  transition: all ease-in-out 0.3s;
  &:hover {
    background: ${({ selectedTypes }) => (selectedTypes ? '#222' : '#ddd')};
  }
  &:not(:last-child) {
    margin-right: 10px;
  }
  color: ${({ selectedTypes }) => (selectedTypes ? '#fff' : '#000')};
  background: ${({ selectedTypes }) => (selectedTypes ? '#000' : '#f5f5f5')};
`
