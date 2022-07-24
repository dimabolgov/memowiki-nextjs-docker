import Head from 'next/head'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <div>
      <Head>
        <title>My page title!!!</title>
        <meta property="og:title" content="My page title" key="title" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <Component {...pageProps} />
  </div>
}

export default MyApp
