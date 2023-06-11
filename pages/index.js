import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Medical Claims Physician Reviewer</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2>Improving Healthcare Outcomes Through Accurate and Thorough Medical Claims Review</h2>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <h2>
        <Link href="posts/first-post">first post</Link>
      </h2>
      </section>
    </Layout>
  );
}