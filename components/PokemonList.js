import pokemonData from '../data/pokemon.json'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'

function zeroPadding(number, length) {
  return (Array(length).join('0') + number).slice(-length)
}
export default function PokemonList() {
  const pocketMonsters = pokemonData.map((pocketMonster, index) => {
    return (
      <List key={index}>
        <Link href={`${zeroPadding(index + 1, 3)}`}>
          <LinkContents>
            <NameEnglish>{pocketMonster.name.english}</NameEnglish>
            <NameJapanese>{pocketMonster.name.japanese}</NameJapanese>
            <Image
              src={`/images/${zeroPadding(index + 1, 3)}.png`}
              alt={pocketMonster.name.japanese}
              width={400}
              height={400}
            />
          </LinkContents>
        </Link>
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
  background: #fff;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  cursor: pointer;
  transition: all ease-out 0.5s;
  will-change: transform, box-shadow;
  &:hover {
    transform: scale(1.05);
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2);
  }
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
