import Head from 'next/head'
import '../styles/style.css'
import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
          <title>Try Passage</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap"
            rel="stylesheet"
          />
        </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
