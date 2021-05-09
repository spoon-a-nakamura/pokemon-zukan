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
        <meta charSet='utf-8' />
        <meta httpEquiv='content-language' content='ja' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='theme-color' content='#FEE906' />
        <meta name='robots' content='index,follow' />
        <meta name='author' content='スタジオスプーン' />
        <title>ポケモン図鑑</title>
        <meta
          name='description'
          content='みんな大好き、ポケモン図鑑（制作：スタジオスプーン 中村明史 @maroponta）'
        />
        <meta
          name='keywords'
          content='ポケモン図鑑, ポケモン, 図鑑, React, スタジオスプーン'
        />
        <link rel='canonical' href='https://pokemon-zukan.vercel.app/' />
        <link
          rel='shortcut icon'
          href='/images/common/favicon.gif'
          type='image/gif'
        />
        <link
          rel='apple-touch-icon'
          href='/images/common/apple-touch-icon.png'
        />
        <meta property='og:site_name' content='みんな大好き、ポケモン図鑑' />
        <meta property='og:title' content='みんな大好き、ポケモン図鑑' />
        <meta
          property='og:image'
          content='https://pokemon-zukan.vercel.app/images/common/ogimg.png'
        />
        <meta
          property='og:description'
          content='みんな大好き、ポケモン図鑑（制作：スタジオスプーン 中村明史 @maroponta）'
        />
        <meta property='og:url' content='https://pokemon-zukan.vercel.app/' />
        <meta property='og:type' content='website' />
        <meta property='og:locale' content='ja_JP' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='studio_spoon' />
        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-LJT822ELXT'
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LJT822ELXT');`,
          }}
        ></script>
      </Head>
      <GlobalCss />
      <FilterContext.Provider value={{ state, dispatch }}>
        <Component {...pageProps} />
      </FilterContext.Provider>
    </>
  )
}
