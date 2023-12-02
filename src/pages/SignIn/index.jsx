import { useEffect, useState } from 'react'
import { MdOutlineMailLock } from 'react-icons/md'
import { TfiLock } from 'react-icons/tfi'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import polygon from '../../assets/polygon.svg'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { useAuth } from '../../hooks/auth'
import { Container, Form } from './styles'

export function SignIn() {
  const [isHidden, setIsHidden] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn } = useAuth()

  async function handleSignIn() {
    try {
      if (email === '' || password === '') {
        toast.error('Preencha todos os campos')
      } else {
        await signIn({ email, password })
        if (signIn === true) {
          toast.success('Login realizado com sucesso!')
        }
      }
    } catch (error) {
      toast.error('Não foi possível entrar!')
    }
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 700) {
        setIsHidden(true)
      } else {
        setIsHidden(false)
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Container>
      <div className="image-logo">
        <img src={polygon} alt="#" />
        <h1>food explorer</h1>
      </div>
      <Form>
        <h2 className={isHidden ? 'hidden' : ''}>Faça login</h2>

        <Input
          placeholder={'Insira seu email'}
          label={'Email'}
          icon={MdOutlineMailLock}
          onChange={(e) => setEmail(e.target.value)}
        ></Input>

        <Input
          placeholder={'Insira sua senha'}
          label={'Senha'}
          icon={TfiLock}
          type={'password'}
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <Button
          title="Entrar"
          onClick={() => {
            handleSignIn()
          }}
        />

        <Link to="/register">Criar conta</Link>
      </Form>
    </Container>
  )
}
