import { useState, useContext } from 'react';
import styled from '@emotion/styled';
import { device } from '../components/MediaQuery';
import { FilterContext } from './FilterReducer';
// import pokemonData from '../data/pokemon.json'
import pokemonData from '../data/pokemon_full.json';

export default function SearchWord() {
  const { state, dispatch } = useContext(FilterContext);

  return (
    <SearchWrapper>
      <Search
        type="text"
        placeholder="SEARCH YOUR FAVORITE POKEMON"
        value={state.inputSearchWord}
        onChange={(e) =>
          dispatch({
            type: 'setInputSearchWord',
            inputSearchWord: e.target.value,
          })
        }
      />
    </SearchWrapper>
  );
}

const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin-left: auto;
  @media ${device.underTablet} {
    display: none;
  }
`;
const Search = styled.input`
  background: rgba(0, 0, 0, 0.05);
  border-radius: 120px;
  padding: 15px 5px 15px 30px;
  border: none;
  font-size: 20px;
  width: 90%;
  text-transform: uppercase;
  outline: none;
  &::placeholder {
    color: #ccc;
  }
`;
