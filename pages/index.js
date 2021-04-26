import { useState } from 'react'
import Header from '../components/Header'
import Container from '../components/Container'
import PokemonList from '../components/PokemonList'
import PokemonCard from '../components/PokemonCard'
import styled from '@emotion/styled'
import pokemonData from '../data/pokemon.json'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'

export default function Home() {
  const [selectedId, setSelectedId] = useState(null)
  return (
    <>
      <AnimateSharedLayout type='crossfade'>
        <Header />
        <Container>
          <Wrapper>
            <ListWrap>
              {pokemonData.map((pokemon, index) => (
                <Card
                  key={index}
                  layoutId={pokemon.id - 1}
                  onClick={() => setSelectedId(pokemon.id)}
                >
                  <PokemonList id={pokemon.id} name={pokemon.name} />
                </Card>
              ))}
            </ListWrap>
          </Wrapper>
          <AnimatePresence>
            {pokemonData.map(
              (pokemon, index) =>
                selectedId === index + 1 && (
                  <Modal key={index}>
                    <ModalContent
                      onClick={() => {
                        setSelectedId(null)
                      }}
                    >
                      <PokemonCard id={selectedId} pokemon={pokemon} />
                    </ModalContent>
                  </Modal>
                )
            )}
          </AnimatePresence>
        </Container>
      </AnimateSharedLayout>
    </>
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
const Card = styled(motion.li)`
  width: 15%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-bottom: 2%;
`
const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-wrap: wrap;
  background: rgba(0, 0, 0, 0.1);
  justify-content: center;
  width: 100%;
  height: 100vh;
`

const ModalContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  cursor: pointer;
`
const Image = styled.img`
  margin-top: 10px;
  max-width: 100%;
  height: auto;
  object-fit: contain;
`
const Button = styled.button`
  background: #fff;
  width: 100px;
  height: 30px;
`
