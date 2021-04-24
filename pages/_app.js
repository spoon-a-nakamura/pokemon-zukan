import Head from 'next/head'
import React, { useEffect } from 'react'
import { adobeLoader } from '../fonts/adobeLoader'
import GlobalCss from '../components/GlobalCss'

export default function App({ Component, pageProps, router }) {
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
      <Component {...pageProps} />
    </>
  )
}
