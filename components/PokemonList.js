import { useState } from 'react'
import pokemonData from '../data/pokemon.json'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'

function zeroPadding(number, length) {
  return (Array(length).join('0') + number).slice(-length)
}

export default function PokemonList() {
  const [load, setLoad] = useState([...Array(pokemonData.length)].fill(false))

  function show(index) {
    setLoad((currentState) => {
      return currentState.map((state, innerIndex) =>
        index === innerIndex ? !state : state
      )
    })
  }
  const pocketMonsters = pokemonData.map((pocketMonster, index) => {
    return (
      <List key={index} loaded={load[index]}>
        <Link href={`${zeroPadding(index + 1, 3)}`}>
          <LinkContents loaded={load[index]}>
            <LinkContentsInner loaded={load[index]}>
              <NameEnglish>{pocketMonster.name.english}</NameEnglish>
              <NameJapanese>{pocketMonster.name.japanese}</NameJapanese>
              <Image
                src={`/images/${zeroPadding(index + 1, 3)}.png`}
                alt={pocketMonster.name.japanese}
                width={400}
                height={400}
                onLoad={() => show(index)}
              />
            </LinkContentsInner>
          </LinkContents>
        </Link>
        <ListNumber>No.{`${zeroPadding(index + 1, 3)}`}</ListNumber>
      </List>
    )
  })
  return (
    <Wrapper>
      <ListWrap>{pocketMonsters}</ListWrap>
    </Wrapper>
  )
}

const Wrapper = styled.div``
const ListWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  list-style: none;
`
const List = styled.li`
  width: 15%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-bottom: 2%;
`
const LinkContents = styled.a`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  cursor: pointer;
  transition: all ease-out 0.5s;
  will-change: background, transform, box-shadow;
  background: ${({ loaded }) =>
    loaded
      ? '#fff'
      : '#eee url(/images/pokemon_ball.gif) center / 100px no-repeat'};
  &:hover {
    transform: scale(1.05);
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2);
  }
`
const LinkContentsInner = styled.div`
  transition: all ease-out 0.5s;
  will-change: opacity, transform;
  opacity: ${({ loaded }) => (loaded ? 1 : 0)};
  transform: ${({ loaded }) => (loaded ? 'scale(1)' : 'scale(0.5)')};
`
const NameJapanese = styled.div`
  text-align: center;
  font-size: 1.1vw;
`
const NameEnglish = styled.div`
  font-family: mr-eaves-modern, sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 1.6vw;
  text-transform: uppercase;
  text-align: center;
`
const ListNumber = styled.p`
  font-size: 14px;
  text-align: center;
  margin-top: 15px;
`
