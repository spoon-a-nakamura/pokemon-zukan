import { useState, useContext } from 'react';
import styled from '@emotion/styled';
import { device } from '../components/MediaQuery';
import { FilterContext } from './FilterReducer';

export default function SearchWord({ className, placeholder = 'SEARCH' }) {
  const { state, dispatch } = useContext(FilterContext);

  return (
    <SearchWrapper className={className}>
      <Search
        type="text"
        placeholder={placeholder}
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
`;
const Search = styled.input`
  background: rgba(0, 0, 0, 0.05);
  border-radius: 120px;
  padding: 15px 30px;
  border: none;
  font-size: 20px;
  width: 90%;
  text-transform: uppercase;
  outline: none;
  &::placeholder {
    color: #ccc;
  }
`;
