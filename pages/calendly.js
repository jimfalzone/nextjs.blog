import Head from 'next/head';
import Layout from '../components/layout';
import CalendlyComponent from '../components/CalendlyComponent';

const CalendlyPage = () => {
    return (
      <Layout>
        <Head>
          <title>Calendly Page</title>
        </Head>
        <h1>Calendly Page</h1>
        <CalendlyComponent />
      </Layout>
    );
  };
  
  export default CalendlyPage;
  