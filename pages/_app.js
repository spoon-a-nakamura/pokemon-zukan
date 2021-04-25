import Head from 'next/head'
import React, { useEffect } from 'react'
import { adobeLoader } from '../fonts/adobeLoader'
import GlobalCss from '../components/GlobalCss'
import { AnimateSharedLayout } from 'framer-motion'
// import { Provider } from 'react-redux'
// import { store } from '../store/index'

export default function App({ Component, pageProps }) {
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

      {/* <Provider store={store}> */}
      <AnimateSharedLayout type='crossfade'>
        <Component {...pageProps} />
      </AnimateSharedLayout>
      {/* </Provider> */}
    </>
  )
}
