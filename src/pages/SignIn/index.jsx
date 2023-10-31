import { MdOutlineMailLock } from 'react-icons/md'
import { TfiLock } from 'react-icons/tfi'
import polygon from '../../assets/polygon.svg'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { Container, Form } from './styles'

export function SignIn() {
  return (
    <Container>
      <div className="image-logo">
        <img src={polygon} alt="#" />
        <h1>food explorer</h1>
      </div>
      <Form>
        <h2 className="hidden">Faça Login</h2>
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
        <Button title="Entrar" />

        <a href="">
          <link href="" />
          CRIAR CONTA
        </a>
      </Form>
    </Container>
  )
}
