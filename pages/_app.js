// `pages/_app.js`
import "../styles/globals.css";
import "../styles/bootstrap.css";



export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}