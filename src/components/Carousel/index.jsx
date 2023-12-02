import Splide from '@splidejs/splide'
import { useEffect, useRef } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { TiMinus, TiPlus } from 'react-icons/ti'
import { Button } from '../../components/Button'
import { Container } from './styles'

export function Carousel({ dishes }) {
  const id = crypto.randomUUID()
  const splideRef = useRef(null)

  useEffect(() => {
    const splide = new Splide(`#splide${id}`, {
      focus: 'right',
      pagination: false,
      autoWidth: true,
    }).mount()

    splideRef.current = splide

    return () => {
      if (splideRef.current) {
        splideRef.current.destroy()
      }
    }
  }, [id, dishes])

  return (
    <Container
      className="splide"
      id={`splide${id}`}
      aria-labelledby="carousel-heading"
    >
      <h2 id="carousel-heading">Refeições</h2>

      <div className="splide__track">
        <ul className="splide__list">
          {dishes.map((dish) => (
            <li className="splide__slide" key={dish.id}>
              <div className="splide__slide__container">
                <AiOutlineHeart />
                <img src={dish.image} alt={dish.name} />
                <div className="splide__slide__container__info">
                  <h3>{dish.name}</h3>
                  <p>{dish.description}</p>
                  <h1>R$ {dish.price}</h1>

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
