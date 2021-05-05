import { useState } from 'react'
import styled from '@emotion/styled'
import TypesSearch from '../components/TypesSearch'

export default function Header({
  onChangeSearchBox,
  onClickSearchSubmit,
  onClickLogo,
}) {
  const [clickSubmit, setClickSubmit] = useState(false)
  const onClickSubmit = () => {
    setClickSubmit(true)
    setTimeout(() => {
      setClickSubmit(false)
    }, 1000)
  }
  return (
    <Wrapper>
      <Heading onClick={onClickLogo}>POKEMON ZUKAN</Heading>
      <SearchWrapper onSubmit={onClickSearchSubmit}>
        <Search
          type='text'
          placeholder='search POKEMON'
          onChange={onChangeSearchBox}
        />
        <SearchSubmit
          type='submit'
          onClick={onClickSubmit}
          clickSubmit={clickSubmit}
        ></SearchSubmit>
      </SearchWrapper>
      <TypesSearch />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: #fff;
  padding: 2% 2% 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 10;
`
const Heading = styled.h1`
  font-size: 3vw;
  cursor: pointer;
`
const SearchWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60vw;
`
const Search = styled.input`
  background: #eee;
  border-radius: 120px 0 0 120px;
  padding: 20px;
  border: none;
  font-size: 20px;
  width: 70%;
  text-transform: uppercase;
  outline: none;
`
const SearchSubmit = styled.button`
  background: #eee url(/images/common/pika.gif) 0 center / contain no-repeat;
  color: #fff;
  border-radius: 0 120px 120px 0;
  border: none;
  width: 110px;
  height: 62px;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;
  transition: all ease-in-out 0.3s;
  &:hover {
    background-position: 20px center;
  }
  animation: ${({ clickSubmit }) =>
    clickSubmit ? 'runAway 1s forwards ease-in-out' : 'none'};
  @keyframes runAway {
    0% {
      background-position: 20px center;
    }
    50% {
      background-position: 150px center;
    }
    51% {
      background-position: 150px 150px;
    }
    52% {
      background-position: -550px 150px;
    }
    53% {
      background-position: -550px center;
    }
    100% {
      background-position: 0px center;
    }
  }
`
