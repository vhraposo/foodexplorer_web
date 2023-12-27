import { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'
import { GiHamburgerMenu, GiKnifeFork } from 'react-icons/gi'
import { PiReceiptThin } from 'react-icons/pi'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import logo from '../../assets/logo.svg'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import { Button } from '../Button'
import { Dropdown } from '../Dropdown'
import { Footer } from '../Footer'
import { Container } from './styles'

const Profile = ({ userImage }) => (
  <div className="profile">
    {userImage ? (
      <img src={userImage} alt="User" className="profile-image" />
    ) : (
      <FaUser className="default-profile-icon" />
    )}
  </div>
)

// const isAdmin = JSON.parse(localStorage.getItem('@foodexplorer:user')).admin

export function Header({ onChange, ...rest }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [userImage, setUserImage] = useState(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const { signOut, userName, isAdmin } = useAuth()
  const navigate = useNavigate()
  const userId = JSON.parse(localStorage.getItem('@foodexplorer:user')).id

  useEffect(() => {
    const fetchUserProfileImage = async () => {
      try {
        const response = await api.get(`/users/${userId}`)
        const user = response.data

        setUserImage(user.avatar)
      } catch (error) {
        console.error('Erro ao obter os detalhes do usuário:', error)
      }
    }

    fetchUserProfileImage()
  }, [])

  async function handleSignOut() {
    try {
      await signOut()
      navigate('/')
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
            onChange={onChange}
            {...rest}
          />
        </div>
        <div className="orders-logout hidden">
          <Button
            className="orders-button"
            icon={PiReceiptThin}
            title={isAdmin ? 'Criar Prato' : 'Pedidos'}
            onClick={() => {
              if (isAdmin) {
                navigate('/new')
              } else {
                navigate('/orders')
              }
            }}
          ></Button>
          <Dropdown />
        </div>
      </div>

      <div className={`menu-open`}>
        <div className="heading-menu" onClick={toggleMenu}>
          <GiKnifeFork />
          <h2>Menu</h2>
        </div>
        <div className="input-search">
          <BsSearch />
          <input
            type="text"
            placeholder="Busque por pratos ou ingredientes"
            onChange={onChange}
            {...rest}
          />
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
