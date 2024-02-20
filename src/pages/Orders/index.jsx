import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'

import { Container } from './styles'

export function Orders() {
  const navigate = useNavigate()
  return (
    <Container>
      <Header />
      <h1 className="ftatt">Em breve....</h1>
      <Button
        title="Voltar para o início"
        onClick={() => {
          navigate('/')
        }}
      />
      <Footer />
    </Container>
  )
}
