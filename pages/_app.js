import "../styles/globals.css";
import "../styles/bootstrap.css";
import Script from 'next/script';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>

      {/* Include the owl-carousel.js script */}
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
      />



      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
