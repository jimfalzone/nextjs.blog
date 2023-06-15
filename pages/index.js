import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import Hero from '../components/hero';
import Introduction from '../components/introduction';
import Services from '../components/services';




export default function Home() {
  return (
    <Layout home>
      <Hero />
      <Services />
      <Introduction />

    </Layout>
  );
}