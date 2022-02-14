import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { FilterContext } from '../components/FilterReducer';
import {
  animationProps,
  filterPokemon,
  useFilteredPokemonList,
  zeroPadding,
} from '../components/Utility';
import { motion } from 'framer-motion';
import { device } from '../components/MediaQuery';
import LazyImage from '../components/LazyImage';
import { FixedSizeGrid as Grid } from 'react-window';
import pokemonData from '../data/pokemon_full.json';

const LazyImageMemo = React.memo((props) => {
  return (
    <LazyImage
      src={`/images/pokemon/${zeroPadding(props.src)}.png`}
      alt={props.alt}
      width={400}
      height={400}
      modal={false}
    />
  );
});

function getColumnCount(width) {
  if (width >= 1024) {
    return 6;
  } else if (width >= 768) {
    return 4;
  } else if (width >= 425) {
    return 3;
  }
  return 2;
}

const MemoizedPokemonList = React.memo(
  ({ width, height, pokemonList, dispatch }) => {
    const columnCount = getColumnCount(width);
    const rowCount = Math.ceil(pokemonList.length / columnCount);
    const columnWidth = width / columnCount;
    const rowHeight = columnWidth * 1.4;
    return (
      <Grid
        columnCount={columnCount}
        rowCount={rowCount}
        columnWidth={columnWidth}
        rowHeight={rowHeight}
        width={width}
        height={height}
      >
        {({ columnIndex, rowIndex, style }) => {
          const index = rowIndex * columnCount + columnIndex;
          const pokemon = pokemonList[index];
          if (!pokemon) return null;
          return (
            <CardItem
              style={style}
              key={pokemon.id}
              layoutId={pokemon.id}
              animate={animationProps.animate}
              exit={animationProps.exit}
              onClick={() => {
                dispatch({
                  type: 'setShowDetailPokemonTarget',
                  showDetailPokemonTarget: index + 1,
                });
                dispatch({
                  type: 'setIsDrawerOpen',
                  isDrawerOpen: false,
                });
              }}
            >
              <CardContents>
                <CardContentsInner>
                  <NameWrapper>
                    <NameEnglish>{pokemon.name.english}</NameEnglish>
                    <NameJapanese>{pokemon.name.japanese}</NameJapanese>
                  </NameWrapper>
                  <ImageWrapper>
                    <LazyImageMemo
                      key={index}
                      src={pokemon.id}
                      alt={pokemon.name.japanese}
                    />
                  </ImageWrapper>
                </CardContentsInner>
              </CardContents>
              <ListNumber>No.{`${pokemon.id}`}</ListNumber>
            </CardItem>
          );
        }}
      </Grid>
    );
  },
);

const PokemonList = ({ width, height }) => {
  const { state, dispatch } = useContext(FilterContext);
  const pokemonList = useFilteredPokemonList(
    state.inputSearchWord,
    state.selectedType,
  );
  return (
    <MemoizedPokemonList
      width={width}
      height={height}
      dispatch={dispatch}
      pokemonList={pokemonList}
    />
  );
};

export default PokemonList;

const CardItem = styled(motion.div)`
  padding: 0 1%;
`;

const CardContents = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 20px;
  box-sizing: border-box;
  cursor: pointer;
  transition: all ease-in-out 0.5s;
  will-change: transform, box-shadow;
`;
const CardContentsInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const NameWrapper = styled.div`
  margin-bottom: 15px;
  margin-top: auto;
  @media ${device.underMobileL} {
    margin-bottom: 5px;
  }
`;
const NameEnglish = styled.div`
  font-family: mr-eaves-modern, sans-serif;
  font-weight: 700;
  font-style: normal;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 3px;
  font-size: 22px;
  @media ${device.overLaptop} {
    font-size: 1.6vw;
  }
  @media ${device.underMobileL} {
    font-size: 5vw;
  }
`;
const NameJapanese = styled.div`
  text-align: center;
  font-size: 12px;
  @media ${device.overLaptopL} {
    font-size: 0.8vw;
  }
  @media ${device.underMobileL} {
    font-size: 3vw;
  }
`;
const ImageWrapper = styled.div`
  position: relative;
  transition: all ease-in-out 0.3s;
  will-change: transform;
  &::before {
    content: '';
    width: 150px;
    height: 150px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%) scale(0);
    background: rgba(0, 0, 0, 0.03);
    border-radius: 200px;
    opacity: 0;
    transition: all ease-in-out 0.3s 0.1s;
    will-change: transform, opacity;
  }
  &:hover {
    transform: scale(1.1);
    &::before {
      opacity: 1;
      transform: translateY(-50%) translateX(-50%) scale(1);
    }
  }
`;
const ListNumber = styled.p`
  font-size: 13px;
  text-align: center;
  margin-top: -10px;
  margin-bottom: auto;
  @media ${device.underMobileL} {
    margin-top: -15px;
  }
`;
