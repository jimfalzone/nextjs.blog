import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import Hero from '../components/hero';
import Introduction from '../components/introduction';
import Services from '../components/services';
import Testimonials from '../components/testimonials';
import CalendlyComponent from '../components/CalendlyComponent';

export default function Home() {
  const [showCalendly, setShowCalendly] = useState(false);

  const handleCalendlyToggle = () => {
    setShowCalendly(!showCalendly);
  };

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Hero onButtonClicked={handleCalendlyToggle} />
      {showCalendly && <CalendlyComponent />}
      <Services />
      <Introduction />
      <Testimonials />
    </Layout>
  );
}
