// `pages/_app.js`
import "../styles/globals.css";
import "../styles/bootstrap.css";
import Script from 'next/script'
import Head from 'next/head';

// ...

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
