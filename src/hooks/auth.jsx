import { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { api } from '../services/api'

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ name, email, password }) {
    try {
      const response = await api.post('/sessions', { name, email, password })
      const { user, token } = response.data

      const { isAdmin } = user
      localStorage.setItem('@foodexplorer:name', user.name)
      localStorage.setItem('@foodexplorer:user', JSON.stringify(user))
      localStorage.setItem('@foodexplorer:token', token)
      localStorage.setItem('@foodexplorer:isadmin', String(isAdmin))

      api.defaults.headers.common.Authorization = `Bearer ${token}`
      setData({ user, token, isAdmin })
    } catch (e) {
      if (e.response) {
        toast(e.response.data.message)
      } else {
        toast.error('Não foi possível entrar!')
      }
    }
  }

  function signOut() {
    localStorage.removeItem('@foodexplorer:name')
    localStorage.removeItem('@foodexplorer:token')
    localStorage.removeItem('@foodexplorer:user')
    localStorage.removeItem('@foodexplorer:isadmin')

    setData({})
  }

  useEffect(() => {
    const user = localStorage.getItem('@foodexplorer:user')
    const token = localStorage.getItem('@foodexplorer:token')
    const isAdmin = localStorage.getItem('@foodexplorer:isadmin')

    if (token && user && isAdmin) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`

      setData({
        token,
        user: JSON.parse(user),
        isAdmin: parseInt(isAdmin, 10) === 1,
      })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user: data.user,
        userName: data.user ? data.user.name : '',
        isAdmin: data.isAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  return context
}
