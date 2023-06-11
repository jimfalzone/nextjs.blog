import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Navigation = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav">
            {isMenuOpen && (
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
            )}
            <li className="nav-item">
              <Link href="/posts/first-post">
                <span
                  className={
                    router.asPath === '/posts/first-post'
                      ? 'nav-link active'
                      : 'nav-link'
                  }
                >
                  First Post
                </span>
              </Link>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
