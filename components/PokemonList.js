import pokemonData from '../data/pokemon_full.json'
import styled from '@emotion/styled'
import { motion, AnimatePresence } from 'framer-motion'
import ZeroPadding from './ZeroPadding'
import PokemonCard from './PokemonCard'

export default function PokemonList() {
  const pokemonAll = pokemonData.map((pokemon) => {
    return (
      <List
        key={pokemon.id}
        layoutId={`card-wrapper-${ZeroPadding(pokemon.id)}`}
      >
        <PokemonCard pokemon={pokemon} />
      </List>
    )
  })
  return (
    <Wrapper>
      <ListWrap>{pokemonAll}</ListWrap>
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
const List = styled(motion.li)`
  width: 15%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-bottom: 2%;
`
