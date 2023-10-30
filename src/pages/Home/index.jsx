import macaronsbrand from '../../assets/macaron.png'
import { Carousel } from '../../components/Carousel'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Brand, Container, Content } from './styles'

import '@splidejs/splide/css/skyblue'

export function Home() {
  return (
    <Container>
      <Header />
      <Brand>
        <img src={macaronsbrand} alt="" />
        <div>
          <h2>Sabores inigualáveis</h2>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </div>
      </Brand>

      <Content>
        <Carousel />
        <Carousel />
        <Carousel />
      </Content>

      <Footer />
    </Container>
  )
}
