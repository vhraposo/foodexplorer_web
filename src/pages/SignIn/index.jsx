import React, { useEffect, useState } from 'react'
import { BsPerson } from 'react-icons/bs'
import { MdOutlineMailLock } from 'react-icons/md'
import { TfiLock } from 'react-icons/tfi'
import { toast } from 'react-toastify'
import polygon from '../../assets/polygon.svg'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Container, Form } from './styles'

export function SignIn() {
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 700) {
        setIsHidden(true)
      } else {
        setIsHidden(false)
      }
    }

    window.addEventListener('resize', handleResize)
    // Chama handleResize no carregamento da página
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
          placeholder={'Exemplo: Victor Raposo'}
          label={'Seu nome'}
          icon={BsPerson}
        ></Input>
        <Input
          placeholder={'Exemplo: exemplo@exemplo.com.br'}
          label={'Email'}
          icon={MdOutlineMailLock}
        ></Input>

        <Input
          placeholder={'No mínimo 6 caracteres'}
          label={'Senha'}
          icon={TfiLock}
          type={'password'}
        ></Input>
        <Button
          title="Entrar"
          onClick={() => {
            toast.success(`Bem vindo, Usuário`)
          }}
        />

        <a href="">
          <link href="" />
          CRIAR CONTA
        </a>
      </Form>
    </Container>
  )
}
