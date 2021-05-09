import styled from '@emotion/styled'

export default function Container({ children }) {
  return (
    <Wrapper>
      <Main>{children}</Main>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 2%;
`

const Main = styled.main`
  margin-top: 200px;
`
