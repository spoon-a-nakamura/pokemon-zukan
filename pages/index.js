import Header from '../components/Header'
import Container from '../components/Container'
import PokemonList from '../components/PokemonList'
import PokemonModal from '../components/PokemonModal'
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion'

export default function Home() {
  return (
    <>
      <AnimateSharedLayout type='crossfade'>
        <Header />
        <Container>
          <PokemonList />
        </Container>
        <AnimatePresence>
          <PokemonModal />
        </AnimatePresence>
      </AnimateSharedLayout>
    </>
  )
}
