import { useEffect, useState } from 'react'
import { PiArrowArcLeftDuotone, PiReceiptLight } from 'react-icons/pi'
import { TiMinus, TiPlus } from 'react-icons/ti'
import { useParams } from 'react-router-dom'
import { Button } from '../../components/Button'
import { api } from '../../services/api'
import { Container } from './styles'

export function Section({ title, children }) {
  const params = useParams()
  const [data, setData] = useState(null)
  const { name, description, price, image, ingredients } = data ?? {}
  const formattedPrice = `R$ ${price ? price.toFixed(2) : '0.00'}`

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`)
      setData(response.data)
    }

    fetchDish()
  }, [])
  return (
    <Container>
      <div className="backdiv" title="voltar">
        <PiArrowArcLeftDuotone />
        Voltar
      </div>

      <div className="wrap">
        <img src={image} alt={`imagem de '${name}'`} />
        <div className="dish-info">
          <h2 className="section-title">{name}</h2>
          {children}

          <p className="section-description">{description}</p>
          <ul className="section-ingredients">
            {ingredients &&
              ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient.name}</li>
              ))}
          </ul>

          <div className="inputstepper">
            <div className="input-stepper-child">
              <TiMinus className="cursor-hability-pointer" />
              <span id="count">1</span>
              <TiPlus className="cursor-hability-pointer" />
            </div>
            <Button icon={PiReceiptLight} title={`pedir ∙ ${formattedPrice}`} />
          </div>
        </div>
      </div>
    </Container>
  )
}
