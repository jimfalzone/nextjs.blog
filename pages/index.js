import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import Hero from '../components/hero';
import utilStyles from '../styles/utils.module.css';
import Introduction from '../components/introduction';




export default function Home() {
  return (
    <Layout home>
      <Hero />
      <Introduction />


    </Layout>
  );
}