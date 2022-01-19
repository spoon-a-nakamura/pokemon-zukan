import { useContext } from 'react';
import { FilterContext } from '../components/FilterReducer';
import styled from '@emotion/styled';
import SearchTypes from './SearchTypes';
import { device } from '../components/MediaQuery';

export default function Drawer() {
  console.log('Render Drawer');
  const { state, dispatch } = useContext(FilterContext);
  return (
    <Wrapper isDrawerOpen={state.isDrawerOpen}>
      <Close
        isOpen={state.isDrawerOpen}
        onClick={() => {
          dispatch({
            type: 'setIsDrawerOpen',
            isDrawerOpen: false,
          });
        }}
      >
        CLOSE
      </Close>
      <SearchTypes />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: ${({ isDrawerOpen }) => (isDrawerOpen ? '0' : '-70%')};
  width: 200px;
  height: 100vh;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(15px);
  padding: 0 1% 2%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  box-shadow: -5px 5px 15px rgba(0, 0, 0, 0.05);
  z-index: 20;
  transition: right ease-in-out 1s;
`;
const Close = styled.div`
  width: 100%;
  font-size: 25px;
  font-weight: bold;
  padding: 27px 20px 23px;
  cursor: pointer;
  transition: all ease-in-out 0.3s;
  background: url(/images/common/close.svg) center right 10px / 20px no-repeat;
  transition: all ease 0.3s;
  &:hover {
    padding: 42px 20px 38px;
    background-color: rgba(0, 0, 0, 0.07);
  }
  @media ${device.underMobileL} {
    font-size: 20px;
  }
`;
