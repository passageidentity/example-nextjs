import Head from 'next/head';
import '../styles/style.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Try Passage</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
