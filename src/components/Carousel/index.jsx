import Splide from '@splidejs/splide'
import { useEffect, useRef, useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { PiReceiptLight } from 'react-icons/pi'
import { TiMinus, TiPlus } from 'react-icons/ti'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Button } from '../../components/Button'
import { Container } from './styles'

export function Carousel({ dishes, title }) {
  const id = crypto.randomUUID()
  const splideRef = useRef(null)
  const navigate = useNavigate()
  const [counts, setCounts] = useState({})
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const splide = new Splide(`#splide${id}`, {
      focus: 'right',
      pagination: false,
      autoWidth: true,
    }).mount()

    splideRef.current = splide

    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth < 700)
    })

    return () => {
      if (splideRef.current) {
        splideRef.current.destroy()
      }
      window.removeEventListener('resize', () =>
        setIsMobile(window.innerWidth > 700),
      )
    }
  }, [id, dishes])

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  const handleIncrement = (dishId) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [dishId]: (prevCounts[dishId] || 0) + 1,
    }))
  }

  const handleDecrement = (dishId) => {
    setCounts((prevCounts) => {
      const newCount = (prevCounts[dishId] || 0) - 1
      return {
        ...prevCounts,
        [dishId]: newCount >= 1 ? newCount : 1,
      }
    })
  }

  function addToChart() {
    try {
      toast.success('Produto adicionado ao carrinho!')
    } catch (e) {
      toast.error('Erro ao adicionar produto ao carrinho!')
    }
  }

  return (
    <Container
      className="splide"
      id={`splide${id}`}
      aria-labelledby="carousel-heading"
    >
      <h2 id="carousel-heading">{title}</h2>

      <div className="splide__track">
        <ul className="splide__list">
          {dishes.map((dish) => {
            const dishId = dish.id
            const count = counts[dishId] || 1
            const updatedPrice = (dish.price * count).toFixed(2)

            return (
              <li className="splide__slide" key={dishId}>
                <div className="splide__slide__container">
                  <AiOutlineHeart />
                  <img
                    src={dish.image}
                    alt={dish.name}
                    onClick={() => handleDetails(dishId)}
                  />
                  <div className="splide__slide__container__info">
                    <h3>{dish.name}</h3>
                    <p>{dish.description}</p>
                    <h1>R$ {dish.price}</h1>

                    <div className="inputstepper">
                      <div className="input-stepper-child">
                        <TiMinus
                          className="cursor-hability-pointer"
                          onClick={() => handleDecrement(dishId)}
                        />
                        <span id="count">{count}</span>
                        <TiPlus
                          className="cursor-hability-pointer"
                          onClick={() => handleIncrement(dishId)}
                        />
                      </div>
                      {isMobile ? (
                        <Button
                          icon={PiReceiptLight}
                          title={`pedir ∙ R$ ${updatedPrice}`}
                          onClick={addToChart}
                        />
                      ) : (
                        <Button title="Incluir" onClick={addToChart} />
                      )}
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </Container>
  )
}
