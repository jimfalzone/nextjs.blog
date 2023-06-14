import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

const Navigation = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const router = useRouter();

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white container-fluid">
            <div className="container-fluid">
                <Link href="/">
                    <div className="navbar-brand">
                        <Image
                            priority
                            src="/images/logo4.png"
                            height={160}
                            width={160}
                            alt=""
                        />
                    </div>
                </Link>
            </div>
            <button
                className="navbar-toggler"
                type="button"
                onClick={toggleMenu}
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <Link href="/">
                            <span
                                className={
                                    router.asPath === '/'
                                        ? 'nav-link active'
                                        : 'nav-link'
                                }
                            >
                                Home
                            </span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link href="/posts/first-post">
                            <span
                                className={
                                    router.asPath === '/posts/first-post'
                                        ? 'nav-link active'
                                        : 'nav-link'
                                }
                            >
                                FirstPost
                            </span>
                        </Link>
                    </li>


                    {/* Add more navigation links as needed */}
                </ul>
            </div>
        </nav >
    );
};

export default Navigation;
