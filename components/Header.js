import styled from '@emotion/styled'

export default function Header() {
  return (
    <Wrapper>
      <Heading>POKEMON ZUKAN</Heading>
    </Wrapper>
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
