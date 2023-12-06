import { useEffect, useState } from 'react'
import macaronsbrand from '../../assets/macaron.png'
import { Carousel } from '../../components/Carousel'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Brand, Container, Content } from './styles'

import '@splidejs/splide/css/skyblue'
import { api } from '../../services/api'

export function Home() {
  const [dishes, setDishes] = useState({
    massas: [],
    bebidas: [],
    sobremesas: [],
  })

  useEffect(() => {
    async function loadDishes() {
      try {
        const response = await api.get('/dishes', {})
        const categorizedDishes = response.data.reduce((acc, dish) => {
          if (!acc[dish.category]) {
            acc[dish.category] = []
          }
          acc[dish.category].push(dish)
          return acc
        }, {})
        setDishes(categorizedDishes)
      } catch (error) {
        console.error('Error fetching dishes:', error)
      }
    }
    loadDishes()
  }, [])

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
        {Object.entries(dishes).map(([category, categoryDishes]) => (
          <Carousel key={category} dishes={categoryDishes} title={category} />
        ))}
      </Content>

      <Footer />
    </Container>
  )
}
