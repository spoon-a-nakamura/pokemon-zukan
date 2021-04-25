import styled from '@emotion/styled'
// import Link from 'next/link'

export default function Header() {
  return (
    <a href='/'>
      <Wrapper>
        <Heading>POKEMON ZUKAN</Heading>
      </Wrapper>
    </a>
  )
}

const Wrapper = styled.div`
  background: #fff;
  padding: 2%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 10;
`
const Heading = styled.h1`
  font-size: 50px;
`
