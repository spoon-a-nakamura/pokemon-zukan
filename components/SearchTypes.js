import { useContext } from 'react'
import styled from '@emotion/styled'
import pokemonTypes from '../data/types.json'
import { FilterContext } from './FilterReducer'

export default function SearchTypes() {
  // Providerから渡ってくるContextをstateとdispatchに分割代入
  const { state, dispatch } = useContext(FilterContext)

  // 選択した属性をBooleanで管理
  const newSelectedState = (index) =>
    state.selectedTypes.map((state, innerIndex) =>
      index === innerIndex ? !state : state
    )
  console.log(state.selectedTypes)

  return (
    <Container>
      <ListWrapper>
        {pokemonTypes.map((type, index) => (
          <List
            key={index}
            onClick={() =>
              dispatch({
                type: 'setSelectedTypes',
                selectedTypes: newSelectedState(index),
              })
            }
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
  background: ${({ selectedTypes }) => (selectedTypes ? '#000' : '#eee')};
`
