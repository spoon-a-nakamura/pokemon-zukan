import { useState, useContext } from 'react'
import styled from '@emotion/styled'
import Header from '../components/Header'
import Container from '../components/Container'
import PokemonList from '../components/PokemonList'
import PokemonCard from '../components/PokemonCard'
import { device } from '../components/MediaQuery'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import { FilterContext } from '../components/FilterReducer'
import { transition } from '../components/Utility'

export default function Home() {
  // Providerから渡ってくるContextをstateに代入
  const { state } = useContext(FilterContext)

  // 詳細と一覧の切り替えState
  const [showDetailPokemonTarget, setShowDetailPokemonTarget] = useState(null)

  return (
    <>
      <AnimateSharedLayout type='crossfade'>
        <Header />
        <Container>
          <Wrapper>
            <ListWrap>
              {state.showingPokemonList.map((pokemon, index) => (
                <Card
                  key={index}
                  layoutId={pokemon.id - 1}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={0.3}
                  onClick={() => setShowDetailPokemonTarget(pokemon.id)}
                >
                  <PokemonList id={pokemon.id} name={pokemon.name} />
                </Card>
              ))}
            </ListWrap>
          </Wrapper>
          <AnimatePresence>
            {state.showingPokemonList.map(
              (pokemon, index) =>
                showDetailPokemonTarget === index + 1 && (
                  <Modal key={index}>
                    <ModalContent>
                      <ModalButton
                        onClick={() => {
                          setShowDetailPokemonTarget(
                            showDetailPokemonTarget - 1
                          )
                        }}
                        initial={{ opacity: 0.6, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        whileHover={{ scale: 1.1 }}
                        transition={transition}
                      >
                        ←
                      </ModalButton>
                      <ModalCard
                        onClick={() => {
                          setShowDetailPokemonTarget(null)
                        }}
                        whileHover={{ scale: 1.03 }}
                        transition={transition}
                        animate={{ opacity: 1, scale: 1 }}
                      >
                        <PokemonCard
                          id={showDetailPokemonTarget}
                          pokemon={pokemon}
                        />
                      </ModalCard>
                      <ModalButton
                        onClick={() => {
                          setShowDetailPokemonTarget(
                            showDetailPokemonTarget + 1
                          )
                        }}
                        initial={{ opacity: 0.6, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        whileHover={{ scale: 1.1 }}
                        transition={transition}
                      >
                        →
                      </ModalButton>
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
  pointer-events: none;
  & + div {
    background: rgba(0, 0, 0, 0);
  }
`
const ModalContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
`
const ModalCard = styled(motion.div)`
  pointer-events: initial;
  cursor: pointer;
  max-width: 90%;
`
const ModalButton = styled(motion.div)`
  background: #000;
  border-radius: 100px;
  width: 70px;
  height: 70px;
  margin: 0 5vw;
  color: #fff;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 7px;
  cursor: pointer;
  pointer-events: initial;
  &:hover {
    transform: scale(1.1);
  }
`
