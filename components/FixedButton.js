import { useContext } from 'react'
import { FilterContext } from '../components/FilterReducer'
import styled from '@emotion/styled'
import { device } from '../components/MediaQuery'

export default function FixedButton() {
  console.log('Render FixedButton')
  const { dispatch } = useContext(FilterContext)
  return (
    <Button
      onClick={() => {
        dispatch({
          type: 'setIsDrawerOpen',
          isDrawerOpen: true,
        })
      }}
    >
      <PokeBall>
        <PokeBallButton />
      </PokeBall>
    </Button>
  )
}

const Button = styled.div`
  cursor: pointer;
  transform: scale(0.8);
  @media ${device.underMobileL} {
    transform: scale(0.6);
  }
`
const PokeBall = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  background: #fff;
  border: 3px solid #000;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: inset -5px 5px 0 5px #ccc;
  animation: shake 1.25s cubic-bezier(0.36, 0.07, 0.19, 0.97) 3;
  &::before,
  &::after {
    content: '';
    position: absolute;
  }
  &::before {
    background: red;
    width: 100%;
    height: 50%;
  }
  &::after {
    top: calc(50% - 2px);
    width: 100%;
    height: 4px;
    background: #000;
  }
  &:hover {
    animation: rotate 1.25s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite;
  }
  @keyframes shake {
    0% {
      transform: translate(0, 0) rotate(0);
    }
    20% {
      transform: translate(-5px, 0) rotate(-20deg);
    }
    30% {
      transform: translate(5px, 0) rotate(20deg);
    }
    50% {
      transform: translate(-5px, 0) rotate(-10deg);
    }
    60% {
      transform: translate(5px, 0) rotate(10deg);
    }
    100% {
      transform: translate(0, 0) rotate(0);
    }
  }
  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
const PokeBallButton = styled.div`
  position: absolute;
  top: calc(50% - 8px);
  left: calc(50% - 8px);
  width: 16px;
  height: 16px;
  background: #7f8c8d;
  border: 2px solid #fff;
  border-radius: 50%;
  z-index: 10;
  box-shadow: 0 0 0 3px black;
  animation: blink 2s infinite;
  @keyframes blink {
    0% {
      background: #eee;
    }
    50% {
      background: #e74c3c;
    }
    100% {
      background: #eee;
    }
  }
`
