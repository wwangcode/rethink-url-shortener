import Head from 'next/head'
import BaseLayout from '../styling/base-layout'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>URL Shortener</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseLayout />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
