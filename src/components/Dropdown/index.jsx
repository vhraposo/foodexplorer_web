import { useEffect, useRef, useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import './styles.css'

const Profile = ({ userImage }) => (
  <div className=" hidden">
    {userImage ? (
      <img src={userImage} alt="User" className="profile-image" />
    ) : (
      <FaUser className="default-profile-icon" />
    )}
  </div>
)

export function Dropdown() {
  const userId = JSON.parse(localStorage.getItem('@foodexplorer:user')).id
  const [userImage, setUserImage] = useState(null)
  async function handleSignOut() {
    try {
      await signOut()
      navigate('/')
      toast.success(`Até mais ${userName} ! 😊`)
    } catch (error) {
      toast.error('Não foi possível realizar o logout!')
    }
  }
  const navigate = useNavigate()

  const { signOut, userName, isAdmin } = useAuth()

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
  const dropdownRef = useRef(null)
  const [isActive, setIsActive] = useState(false)
  const onClick = () => setIsActive(!isActive)

  return (
    <div className="container">
      <div className="menu-container">
        <Profile style={{ display: 'none' }} userImage={userImage}></Profile>
        <button onClick={onClick} className="menu-button">
          {userImage ? (
            <img
              src={userImage}
              alt="User Profile Image"
              className="profile-image"
            />
          ) : (
            <span>Menu</span>
          )}
        </button>

        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? 'active' : 'inactive'}`}
        >
          <ul>
            <li>
              <a href="#">Perfil</a>
            </li>
            <li>
              <a href="#" onClick={handleSignOut}>
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
