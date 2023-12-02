import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { GiHamburgerMenu, GiKnifeFork } from 'react-icons/gi'
import { PiReceiptThin, PiSignOut } from 'react-icons/pi'
import { toast } from 'react-toastify'
import logo from '../../assets/logo.svg'
import { useAuth } from '../../hooks/auth'
import { Button } from '../Button'
import { Footer } from '../Footer'
import { Container, Logout } from './styles'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const { signOut, userName } = useAuth()

  async function handleSignOut() {
    try {
      await signOut()
      toast.success(`Até mais ${userName} ! 😊`)
    } catch (error) {
      toast.error('Não foi possível realizar o logout!')
    }
  }

  return (
    <Container $menuIsOpen={isMenuOpen}>
      <button onClick={toggleMenu}>
        <GiHamburgerMenu />
      </button>
      <div className="heading-one">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <span>food explorer</span>
          <Button className="receipt-icon" title="0" icon={PiReceiptThin} />
        </div>
        <div className="input-search ">
          <BsSearch className="hidden" />
          <input
            className="hidden"
            type="text"
            placeholder="Busque por pratos ou ingredientes"
          />
        </div>
        <div className="orders-logout hidden">
          <Button
            className="orders-button"
            icon={PiReceiptThin}
            title="Pedidos (0)"
          />
          <Logout>
            <PiSignOut onClick={handleSignOut} />
          </Logout>
        </div>
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
            <a onClick={handleSignOut} href="/">
              Logout
            </a>
          </li>
        </ul>
        <Footer />
      </div>
    </Container>
  )
}
