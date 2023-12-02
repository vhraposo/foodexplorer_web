import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { BsPerson } from 'react-icons/bs'
import { MdOutlineMailLock } from 'react-icons/md'
import { TfiLock } from 'react-icons/tfi'
import { toast } from 'react-toastify'
import polygon from '../../assets/polygon.svg'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { api } from '../../services/api'
import { Container, Form } from './styles'

export function SignUp() {
  const [isHidden, setIsHidden] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function handleSignUp() {
    if (!name || !email || !password) {
      toast.error('Preencha todos os campos!')
    }
    api
      .post('/users', { name, email, password })
      .then(() => {
        toast.success('Usuário cadastrado com sucesso!')
        navigate('/')
      })
      .catch((error) => {
        if (error.response) {
          toast(error.response.data.message)
        } else {
          toast.error('Não foi possível cadastrar')
        }
      })
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
        <h2 className={isHidden ? 'hidden' : ''}>Crie sua conta</h2>
        <Input
          placeholder={'Exemplo: Victor Raposo'}
          label={'Seu nome'}
          icon={BsPerson}
          onChange={(e) => setName(e.target.value)}
        ></Input>
        <Input
          placeholder={'Exemplo: exemplo@exemplo.com.br'}
          label={'Email'}
          icon={MdOutlineMailLock}
          onChange={(e) => setEmail(e.target.value)}
        ></Input>

        <Input
          placeholder={'No mínimo 6 caracteres'}
          label={'Senha'}
          icon={TfiLock}
          type={'password'}
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <Button title="Criar conta" onClick={handleSignUp} />

        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </Container>
  )
}
