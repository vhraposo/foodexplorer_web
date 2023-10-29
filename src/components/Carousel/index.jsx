import Splide from '@splidejs/splide'
import { useEffect } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { TiMinus, TiPlus } from 'react-icons/ti'
import { Button } from '../../components/Button'
import { Container } from './styles'

export function Carousel({ data }) {
  // const [DishesSlides, setDishesSlides] = useState([])
  const id = crypto.randomUUID()
  const dishes = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1480&ixlib=rb-403.3&ixid=MXwxMjA3fDB8fA%3D',
      name: 'Salada Ravanello',
      description: 'A melhor salada da cidade',
      price: 49.97,
    },
    {
      id: 2,
      image:
        'https://media.istockphoto.com/id/1136814342/pt/foto/delicious-spaghetti-served-on-a-black-plate.jpg?s=612x612&w=is&k=20&c=CmBsnnVMo-AJ7ZayaGusePo74lC-qTFIOQK1qTrNsdg=',
      name: 'Spaguetti Gambe',
      description: 'O melhor spaguetti da cidade',
      price: 79.97,
    },
    {
      id: 3,
      image:
        'https://media.istockphoto.com/id/1136814342/pt/foto/delicious-spaghetti-served-on-a-black-plate.jpg?s=612x612&w=is&k=20&c=CmBsnnVMo-AJ7ZayaGusePo74lC-qTFIOQK1qTrNsdg=',
      name: 'Spaguetti Gambe',
      description: 'O melhor spaguetti da cidade',
      price: 79.97,
    },
    {
      id: 4,
      image:
        'https://media.istockphoto.com/id/1136814342/pt/foto/delicious-spaghetti-served-on-a-black-plate.jpg?s=612x612&w=is&k=20&c=CmBsnnVMo-AJ7ZayaGusePo74lC-qTFIOQK1qTrNsdg=',
      name: 'Spaguetti Gambe',
      description: 'O melhor spaguetti da cidade',
      price: 79.97,
    },
    {
      id: 5,
      image:
        'https://media.istockphoto.com/id/1136814342/pt/foto/delicious-spaghetti-served-on-a-black-plate.jpg?s=612x612&w=is&k=20&c=CmBsnnVMo-AJ7ZayaGusePo74lC-qTFIOQK1qTrNsdg=',
      name: 'Spaguetti Gambe',
      description: 'O melhor spaguetti da cidade',
      price: 79.97,
    },
  ]

  useEffect(() => {
    new Splide(`#splide${id}`, {
      pagination: false,
      autoWidth: true,
      rewind: true,
      rewindByDrag: true,
    }).mount()
  }, [id, data, dishes])
  return (
    <Container
      className="splide"
      id={`splide${id}`}
      aria-labelledby="carousel-heading"
    >
      <h2 id="carousel-heading">Refeições</h2>

      <div className="splide__track">
        <ul className="splide__list">
          {dishes.map((dishes) => (
            <li className="splide__slide" key={dishes.id}>
              <div className="splide__slide__container">
                <AiOutlineHeart />
                <img src={dishes.image} alt={dishes.name} />
                <div className="splide__slide__container__info">
                  <h3>{dishes.name}</h3>
                  {/* <p>{dishes.description}</p> */}
                  <h1>R$ {dishes.price}</h1>

                  <div className="inputstepper">
                    <div className="input-stepper-child">
                      <TiMinus className="cursor-hability-pointer" />
                      <span id="count">01</span>
                      <TiPlus className="cursor-hability-pointer" />
                    </div>
                  </div>

                  <Button title="Incluir" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}
