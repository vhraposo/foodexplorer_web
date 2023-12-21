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
  const [search, setSearch] = useState('')

  // useEffect(() => {
  //   async function loadDishes() {
  //     try {
  //       const response = await api.get('/dishes', {})
  //       const categorizedDishes = response.data.reduce((acc, dish) => {
  //         if (!acc[dish.category]) {
  //           acc[dish.category] = []
  //         }
  //         acc[dish.category].push(dish)
  //         return acc
  //       }, {})
  //       setDishes(categorizedDishes)
  //     } catch (error) {
  //       console.error('Error fetching dishes:', error)
  //     }
  //   }
  //   loadDishes()
  // }, [])
  const debounce = (fn, delay = 500) => {
    let timeoutId
    return (...args) => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => fn(...args), delay)
    }
  }

  useEffect(() => {
    const debouncedFetchDishes = debounce(async () => {
      try {
        const response = await api.get(`/dishes?name=${search}`)
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
    })

    debouncedFetchDishes()
  }, [search])

  return (
    <Container>
      <Header onChange={(e) => setSearch(e.target.value)} />
      <Brand>
        <img src={macaronsbrand} alt="" />
        <div>
          <h2>Sabores inigualáveis</h2>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </div>
      </Brand>

      <Content>
        {Object.entries(dishes).map(([category, dishesByCategory]) => (
          <Carousel key={category} dishes={dishesByCategory} title={category} />
        ))}
      </Content>

      <Footer />
    </Container>
  )
}
