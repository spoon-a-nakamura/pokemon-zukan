import Head from 'next/head'
import React, { createContext, useEffect, useReducer } from 'react'
import { adobeLoader } from '../fonts/adobeLoader'
import GlobalCss from '../components/GlobalCss'
import pokemonTypes from '../data/types.json'
import TypesReducer from '../components/TypesReducer'

//　selectedTypes ステートの初期値を宣言
const initialTypesState = {
  selectedTypes: [...Array(pokemonTypes.length)].fill(false),
}

// selectedTypes コンテキストを作成する
export const SelectedTypesContext = createContext({})

export default function App({ Component, pageProps }) {
  const [state, dispatch] = useReducer(TypesReducer, initialTypesState)

  useEffect(() => {
    if (process.browser) adobeLoader(document)
  }, [])
  return (
    <>
      <Head>
        <title>POKEMON図鑑</title>
        <link rel='icon' href='favicon.gif' type='image/gif' />
      </Head>
      <GlobalCss />
      <SelectedTypesContext.Provider value={{ state, dispatch }}>
        <Component {...pageProps} />
      </SelectedTypesContext.Provider>
    </>
  )
}
