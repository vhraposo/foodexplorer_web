import Splide from '@splidejs/splide'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from '../Card'
import { Container } from './styles'

export const Carousel = ({ dishes, title }) => {
  const id = crypto.randomUUID()
  const splideRef = useRef(null)
  const navigate = useNavigate()
  const [isMobile, setIsMobile] = useState(false)
  const [isMobile2, setIsMobile2] = useState(false)

  useEffect(() => {
    const splide = new Splide(`#splide${id}`, {
      focus: 'right',
      pagination: false,
      autoWidth: true,
    }).mount()

    splideRef.current = splide

    window.addEventListener('resize', () => {
      setIsMobile2(window.innerWidth < 700)
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

  return (
    <Container
      className="splide"
      id={`splide${id}`}
      aria-labelledby="carousel-heading"
    >
      <h2 id="carousel-heading">{title}</h2>

      <div className="splide__track">
        <ul className="splide__list">
          {dishes.map((dish) => (
            <Card
              key={dish.id}
              dish={dish}
              handleDetails={handleDetails}
              isMobile2={isMobile2}
            />
          ))}
        </ul>
      </div>
    </Container>
  )
}
