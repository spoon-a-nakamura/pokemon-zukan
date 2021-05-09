import styled from '@emotion/styled'

export default function Container({ children }) {
  console.log('Render Container')
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
  margin-top: 110px;
`
