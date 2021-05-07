import { useState, useContext } from 'react'
import styled from '@emotion/styled'
import Header from '../components/Header'
import Container from '../components/Container'
import PokemonList from '../components/PokemonList'
import PokemonModal from '../components/PokemonModal'
import { device } from '../components/MediaQuery'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import { FilterContext } from '../components/FilterReducer'
import { animationProps } from '../components/Utility'

export default function Home() {
  // Providerから渡ってくるContextをstateとdispatchに分割代入
  const { state, dispatch } = useContext(FilterContext)

  return (
    <>
      <AnimateSharedLayout type='crossfade'>
        <Header />
        <Container>
          <Wrapper>
            <ListWrap>
              {state.showingPokemonList.map((pokemon) => (
                <Card
                  key={pokemon.id}
                  layoutId={pokemon.id - 1}
                  animate={animationProps.animate}
                  exit={animationProps.exit}
                  onClick={() =>
                    dispatch({
                      type: 'setShowDetailPokemonTarget',
                      showDetailPokemonTarget: pokemon.id,
                    })
                  }
                >
                  <PokemonList id={pokemon.id} name={pokemon.name} />
                </Card>
              ))}
            </ListWrap>
          </Wrapper>
        </Container>
        <AnimatePresence>
          <PokemonModal />
        </AnimatePresence>
      </AnimateSharedLayout>
    </>
  )
}

const Wrapper = styled.div``
const ListWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 2%;
  width: 100%;
  list-style: none;
`
const Card = styled(motion.li)`
  width: 49%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-bottom: 2%;
  @media ${device.mobileL} {
    width: 32%;
  }
  @media ${device.tablet} {
    width: 23.5%;
  }
  @media ${device.laptop} {
    width: 15%;
  }
  @media ${device.desktop} {
    width: 9%;
  }
`
