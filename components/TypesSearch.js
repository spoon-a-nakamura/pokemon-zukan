import { useState } from 'react'
import styled from '@emotion/styled'
import pokemonTypes from '../data/types.json'

export default function TypesSearch() {
  // 選択しているタイプのState
  const [selectedTypes, setSelectedTypes] = useState(
    [...Array(pokemonTypes.length)].fill(false)
  )

  // タイプをクリックした時のState管理関数
  const handleSelectedTypes = (index) => {
    setSelectedTypes((currentState) => {
      const newSelectedState = currentState.map((state, innerIndex) =>
        index === innerIndex ? !state : state
      )
      return newSelectedState
    })
  }

  return (
    <Container>
      <ListWrapper>
        {pokemonTypes.map((type, index) => (
          <List
            key={index}
            onClick={() => handleSelectedTypes(index)}
            selectedTypes={selectedTypes[index]}
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
