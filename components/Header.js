import styled from '@emotion/styled'
import Router from 'next/router'
import SearchWord from './SearchWord'

export default function Header() {
  console.log('Render Header')
  const reload = () => Router.reload()
  return (
    <Wrapper>
      <Heading onClick={reload}>POKEMON ZUKAN</Heading>
      <SearchWord />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(15px);
  padding: 2% 2%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.05);
  position: fixed;
  width: 100%;
  z-index: 10;
`
const Heading = styled.h1`
  font-size: 3vw;
  cursor: pointer;
`
