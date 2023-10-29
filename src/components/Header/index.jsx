import { useState } from 'react';
import { PiSignOut } from 'react-icons/pi';
import { GiHamburgerMenu, GiKnifeFork } from 'react-icons/gi';
import { Container, Logout } from './styles';
import logo from '../../assets/logo.svg';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  

  return (
    <Container $menuIsOpen={isMenuOpen}>
      <button onClick={toggleMenu}>
        <GiHamburgerMenu />
      </button>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <span>food explorer</span>
      </div>

      <div className={`menu-open`}>
        <div className='heading-menu' onClick={toggleMenu}>
          <GiKnifeFork />
          <h2>Menu</h2>
        </div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">Sobre</a>
          </li>
          <li>
            <a href="/contact">Contato</a>
          </li>
        </ul>
      </div>

      <Logout>
        <PiSignOut />
      </Logout>
    </Container>
  );
}
