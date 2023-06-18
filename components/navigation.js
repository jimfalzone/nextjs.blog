import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

const Navigation = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      const shouldStick = window.scrollY > navbar.offsetTop;

      if (shouldStick) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-white container-fluid ${isMenuOpen ? 'show' : ''}`}>
      <div className="container-fluid">
        <Link href="/">
          <div className="navbar-brand">
            <Image priority src="/images/logo4.png" height={160} width={160} alt="" />
          </div>
        </Link>
      </div>
      <button className="navbar-toggler" type="button" onClick={toggleMenu}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active link-custom" href="#services">
              Services
            </a>
          </li>
          <li className="nav-item">
          <a className="nav-link active link-custom" href="#benefits">
              Benefits
            </a>
          </li>
          <li className="nav-item">
          <a className="nav-link active link-custom" href="#testimonials">
              Testimonials
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
              tabIndex={-1}
              aria-disabled="true"
            >
              Disabled
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
