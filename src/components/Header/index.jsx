import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { GiHamburgerMenu, GiKnifeFork } from 'react-icons/gi'
import { PiSignOut } from 'react-icons/pi'
import logo from '../../assets/logo.svg'
import { Footer } from '../Footer'
import { Container, Logout } from './styles'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  console.log(isMenuOpen)

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
        <div className="heading-menu" onClick={toggleMenu}>
          <GiKnifeFork />
          <h2>Menu</h2>
        </div>
        <div className="input-search">
          <BsSearch />
          <input type="text" placeholder="Busque por pratos ou ingredientes" />
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
        <Footer />
      </div>

      <Logout>
        <PiSignOut />
      </Logout>
    </Container>
  )
}
