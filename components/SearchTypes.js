import { useContext } from 'react'
import styled from '@emotion/styled'
import { FilterContext } from './FilterReducer'
import { device } from '../components/MediaQuery'
import pokemonTypes from '../data/types.json'
import pokemonData from '../data/pokemon.json'
// import pokemonData from '../data/pokemon_full.json'

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

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 74px);
`
const ListWrapper = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;
  width: 100%;
  height: 100%;
`
const List = styled.li`
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  border-bottom: 1px solid #ddd;
  transition: all ease-in-out 0.3s;
  padding: ${({ selectedTypes }) => (selectedTypes ? '40px 20px' : '20px')};
  background: ${({ selectedTypes }) =>
    selectedTypes ? 'rgba(0,0,0,0.03)' : 'rgba(0,0,0,0)'};
  &:hover {
    padding-left: 30px;
    background: ${({ selectedTypes }) =>
      selectedTypes ? 'rgba(0,0,0,0.05)' : 'rgba(0,0,0,0.02)'};
  }
  @media ${device.underMobileL} {
    font-size: 12px;
  }
`
