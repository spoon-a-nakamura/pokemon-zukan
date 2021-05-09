import { useState, useContext } from 'react'
import styled from '@emotion/styled'
import { FilterContext } from './FilterReducer'
// import pokemonData from '../data/pokemon.json'
import pokemonData from '../data/pokemon_full.json'

export default function SearchWord() {
  console.log('Render SearchWord')

  // Providerから渡ってくるContextをstateとdispatchに分割代入
  const { state, dispatch } = useContext(FilterContext)

  // 検索しているテキストをStateに反映
  const handleSearchWord = (e) => {
    console.log(`検索中...：${state.inputSearchWord}`)
    return e.target.value
  }

  // 検索したテキストによってフィルタされた配列を管理
  const filterPokemonList = (e) => {
    // formのsubmitなので、preventDefault
    e.preventDefault()

    // 検索したテキストが部分一致すればそのポケモンを。入力値が空であれば全数を返す。
    const inputSearchWordResult = state.inputSearchWord
      ? pokemonData.filter(
          (value) =>
            value.name.japanese.includes(state.inputSearchWord) && value
        )
      : pokemonData
    console.log(`検索実行：${state.inputSearchWord}`)
    return inputSearchWordResult
  }

  // 検索実行後の１秒間管理（ピカチューを走らせる為）
  // かつ、Framerの挙動がおかしくなるので、filterPokemonList関数を実行する前に一度ポケモンリストを空にする
  const [clickSubmit, setClickSubmit] = useState(false)
  const onClickSubmit = () => {
    setClickSubmit(true)
    setTimeout(() => {
      setClickSubmit(false)
    }, 1000)
    return []
  }

  return (
    <SearchWrapper
      onSubmit={(e) => {
        dispatch({
          type: 'setShowingPokemonList',
          showingPokemonList: filterPokemonList(e),
        })
      }}
    >
      <Search
        type='text'
        placeholder='SEARCH POKEMON'
        onChange={(e) =>
          dispatch({
            type: 'setInputSearchWord',
            inputSearchWord: handleSearchWord(e),
          })
        }
      />
      <SearchSubmit
        type='submit'
        onClick={() =>
          dispatch({
            type: 'setShowingPokemonList',
            showingPokemonList: onClickSubmit(),
          })
        }
        clickSubmit={clickSubmit}
      ></SearchSubmit>
    </SearchWrapper>
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
  background: #f5f5f5;
  border-radius: 120px 0 0 120px;
  padding: 20px;
  border: none;
  font-size: 20px;
  width: 70%;
  text-transform: uppercase;
  outline: none;
`
const SearchSubmit = styled.button`
  background: #f5f5f5 url(/images/common/pika.gif) 0 center / contain no-repeat;
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
