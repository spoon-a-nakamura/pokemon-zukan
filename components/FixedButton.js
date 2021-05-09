import { useContext } from 'react'
import { FilterContext } from '../components/FilterReducer'
import styled from '@emotion/styled'

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
  position: fixed;
  bottom: -55px;
  right: -50px;
  transform: scale(0.2);
  cursor: pointer;
`
const PokeBall = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  background: #fff;
  border: 10px solid #000;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: inset -10px 10px 0 10px #ccc;
  animation: fall 0.25s ease-in-out,
    shake 1.25s cubic-bezier(0.36, 0.07, 0.19, 0.97) 6;
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
    top: calc(50% - 10px);
    width: 100%;
    height: 20px;
    background: #000;
  }
  &:hover {
    animation: shake2 1.25s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite;
  }
  @keyframes shake {
    0% {
      transform: translate(0, 0) rotate(0);
    }
    20% {
      transform: translate(-10px, 0) rotate(-20deg);
    }
    30% {
      transform: translate(10px, 0) rotate(20deg);
    }
    50% {
      transform: translate(-10px, 0) rotate(-10deg);
    }
    60% {
      transform: translate(10px, 0) rotate(10deg);
    }
    100% {
      transform: translate(0, 0) rotate(0);
    }
  }
  @keyframes shake2 {
    0% {
      transform: translate(0, 0) rotate(0);
    }
    20% {
      transform: translate(-10px, 0) rotate(-20deg);
    }
    30% {
      transform: translate(10px, 0) rotate(20deg);
    }
    50% {
      transform: translate(-10px, 0) rotate(-10deg);
    }
    60% {
      transform: translate(10px, 0) rotate(10deg);
    }
    100% {
      transform: translate(0, 0) rotate(0);
    }
  }
  @keyframes fall {
    0% {
      top: -50px;
      opacity: 0;
    }
    60% {
      top: 0;
      opacity: 1;
    }
    80% {
      top: -20px;
      opacity: 1;
    }
    100% {
      opacity: 0;
      opacity: 1;
    }
  }
`
const PokeBallButton = styled.div`
  position: absolute;
  top: calc(50% - 30px);
  left: calc(50% - 30px);
  width: 60px;
  height: 60px;
  background: #7f8c8d;
  border: 10px solid #fff;
  border-radius: 50%;
  z-index: 10;
  box-shadow: 0 0 0 10px black;
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
