import Head from 'next/head'
import React, { useEffect, useReducer } from 'react'
import { adobeLoader } from '../fonts/adobeLoader'
import GlobalCss from '../components/GlobalCss'
import {
  FilterReducer,
  initialStates,
  FilterContext,
} from '../components/FilterReducer'

export default function App({ Component, pageProps }) {
  // FilterReducer.jsファイルで定義したactionとStateの初期値を引数にしたReducer関数を、stateとdispatchに分割代入
  const [state, dispatch] = useReducer(FilterReducer, initialStates)

  // AdobeFontの読み込み
  useEffect(() => {
    if (process.browser) adobeLoader(document)
  }, [])
  return (
    <>
      <Head>
        <title>POKEMON図鑑</title>
        <link rel='icon' href='/images/common/favicon.gif' type='image/gif' />
      </Head>
      <GlobalCss />
      <FilterContext.Provider value={{ state, dispatch }}>
        <Component {...pageProps} />
      </FilterContext.Provider>
    </>
  )
}
