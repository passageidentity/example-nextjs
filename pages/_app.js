import Head from 'next/head';
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.css';

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
