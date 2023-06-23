import { useState, useEffect } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';


const Navigation = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true
    });
    setMenuOpen(false);
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
        <a href="#" onClick={scrollToTop}>
          <div className="navbar-brand">
            <Image priority src="/images/logo4.png" height={160} width={160} alt="" />
          </div>
        </a>
      </div>
      <button className="navbar-toggler" type="button" onClick={toggleMenu}>
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <ScrollLink
              to="services"
              smooth={true}
              offset={-200}
              duration={500}
              className="nav-link active link-custom"
              style={{ cursor: 'pointer' }}
            >
              Services
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink
              to="benefits"
              smooth={true}
              offset={-200}
              duration={500}
              className="nav-link active link-custom"
              style={{ cursor: 'pointer' }}
            >
              Benefits
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink
              to="testimonials"
              smooth={true}
              offset={-220}
              duration={500}
              className="nav-link active link-custom"
              style={{ cursor: 'pointer' }}
            >
              Testimonials
            </ScrollLink>
          </li>
          {/* <Link href="./pages/calendly.js" passHref>
            <span className="nav-link">Calendly</span>
          </Link> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
