import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Navigation from './navigation';
import Footer from './footer';

const name = 'Medical Claims Physician Reviewer';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                {/* Head content */}
                <script src="https://assets.calendly.com/assets/external/widget.js" />
            </Head>
            <header className={styles.header}>
                <Navigation />
            </header>
            <main>{children}</main>
            <Footer />
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">← Back to home</Link>
                </div>
            )}
        </div>
    );
}
