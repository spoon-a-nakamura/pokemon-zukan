import { useContext } from 'react';
import styled from '@emotion/styled';
import PokemonCard from '../components/PokemonCard';
import { motion } from 'framer-motion';
import { FilterContext } from '../components/FilterReducer';
import { animationProps, useFilteredPokemonList } from '../components/Utility';
import { device } from '../components/MediaQuery';

export default function PokemonModal() {
  const { state, dispatch } = useContext(FilterContext);
  const pokemonList = useFilteredPokemonList(
    state.inputSearchWord,
    state.selectedType,
  );
  const index = state.setectedPokemonIndex;
  const pokemon = pokemonList[index];

  if (!pokemon) return null;

  return (
    <Modal key={index} transition={animationProps.transition}>
      <ModalContent>
        <Close
          onClick={() => {
            dispatch({
              type: 'setSetectedPokemonIndex',
              index: null,
            });
          }}
        />
        <Name
          initial={{ opacity: 0, y: '-50%' }}
          animate={{ opacity: 0.5, scale: [1.5, 0.6], y: '-50%' }}
          exit={{ opacity: 0, y: '-50%' }}
        >
          {pokemon.name.english}
        </Name>
        <ModalButton
          onClick={() => {
            dispatch({
              type: 'setSetectedPokemonIndex',
              index: index - 1,
            });
          }}
          initial={animationProps.initial}
          animate={animationProps.animate}
          exit={animationProps.exit}
          whileHover={animationProps.whileHover.mini}
          transition={animationProps.transition}
          prev={true}
        >
          ←
        </ModalButton>
        <ModalCard
          onClick={() => {
            dispatch({
              type: 'setSetectedPokemonIndex',
              index: null,
            });
          }}
          transition={animationProps.transition}
          animate={animationProps.animate}
        >
          <PokemonCard pokemon={pokemon} />
        </ModalCard>
        <ModalButton
          onClick={() => {
            dispatch({
              type: 'setSetectedPokemonIndex',
              index: index + 1,
            });
          }}
          initial={animationProps.initial}
          animate={animationProps.animate}
          exit={animationProps.exit}
          whileHover={animationProps.whileHover.mini}
          transition={animationProps.transition}
          next={true}
        >
          →
        </ModalButton>
      </ModalContent>
    </Modal>
  );
}

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  background: rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(15px);
  justify-content: center;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  pointer-events: none;
  z-index: 100;
  transition: all ease 0.5s;
  overflow-y: auto;
  & + div {
    background: rgba(0, 0, 0, 0);
  }
`;
const ModalContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  pointer-events: none;
  padding-bottom: 20px;
  @media ${device.underMobileL} {
    padding: 20px 0;
  }
`;
const ModalCard = styled(motion.div)`
  pointer-events: initial;
  cursor: pointer;
  max-width: 90%;
  margin: auto;
  @media ${device.overMobileM} {
    margin: auto;
  }
  @media screen and (min-width: 720px) and (max-width: 768px) {
    margin: 0 20vw;
  }
  @media screen and (min-width: 567px) and (max-width: 720px) {
    margin: 0 10vw;
  }
  @media ${device.overTablet} {
    margin: auto;
  }
`;
const ModalButton = styled(motion.button)`
  appearance: none;
  border: none;
  padding: 8px 0 0;
  line-height: 1;
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
  cursor: pointer;
  pointer-events: initial;
  &:hover {
    transform: scale(1.1);
  }
  order: ${({ prev }) => (prev ? 1 : 2)};
  @media ${device.overTablet} {
    order: 0;
  }
  @media ${device.underMobileL} {
    width: 60px;
    height: 60px;
    font-size: 20px;
    padding-top: 3px;
    margin-top: -20px;
    margin-bottom: auto;
  }
`;
const Name = styled(motion.div)`
  position: fixed;
  top: 50%;
  font-size: 500px;
  font-weight: bold;
  color: #fff;
  z-index: -1;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  @media ${device.underMobileL} {
    font-size: 250px;
  }
`;
const Close = styled.div`
  position: absolute;
  cursor: pointer;
  top: 50px;
  right: 50px;
  width: 50px;
  height: 50px;
  pointer-events: initial;
  transition: all ease 0.5s;
  background: url(/images/common/close.svg) center / contain no-repeat;
  &:hover {
    transform: scale(1.1) rotate(180deg);
  }
  @media ${device.underMobileL} {
    top: 20px;
    right: 20px;
    width: 30px;
    height: 30px;
  }
`;
