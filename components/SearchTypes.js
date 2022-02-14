import { useContext } from 'react';
import styled from '@emotion/styled';
import { FilterContext } from './FilterReducer';
import { device } from '../components/MediaQuery';
import pokemonTypes from '../data/types.json';

export default function SearchTypes() {
  const { state, dispatch } = useContext(FilterContext);

  return (
    <Container>
      <ListWrapper>
        {pokemonTypes.map((type, index) => (
          <List
            key={index}
            onClick={(e) => {
              dispatch({
                type: 'setSelectedType',
                selectedType: type.english,
              });
            }}
            selectedType={state.selectedType === type.english}
          >
            {type.japanese}
          </List>
        ))}
      </ListWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 74px);
`;
const ListWrapper = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;
  width: 100%;
  height: 100%;
`;
const List = styled.li`
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  border-bottom: 1px solid #ddd;
  transition: all ease-in-out 0.3s;
  padding: ${({ selectedType }) => (selectedType ? '40px 20px' : '20px')};
  background: ${({ selectedType }) =>
    selectedType ? 'rgba(0,0,0,0.03)' : 'rgba(0,0,0,0)'};
  &:hover {
    padding-left: 30px;
    background: ${({ selectedType }) =>
      selectedType ? 'rgba(0,0,0,0.05)' : 'rgba(0,0,0,0.02)'};
  }
  @media ${device.underMobileL} {
    font-size: 12px;
  }
`;
