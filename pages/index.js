import styled from '@emotion/styled'
import Header from '../components/Header'
import Container from '../components/Container'
import PokemonList from '../components/PokemonList'
import PokemonModal from '../components/PokemonModal'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'

export default function Home() {
  return (
    <>
      <AnimateSharedLayout type='crossfade'>
        <Header />
        <Container>
          <Wrapper>
            <PokemonList />
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
