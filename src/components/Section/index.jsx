import { useEffect, useState } from 'react'
import {
  PiArrowArcLeftDuotone,
  PiReceiptLight,
  PiTrashLight,
} from 'react-icons/pi'
import { TiMinus, TiPlus } from 'react-icons/ti'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Button } from '../../components/Button'
import { api } from '../../services/api'
import { Container } from './styles'

export function Section({ title, children }) {
  const params = useParams()
  const [data, setData] = useState(null)
  const [count, setCount] = useState(1)
  const { name, description, price, image, ingredients } = data ?? {}
  const updatedPrice = (price * count).toFixed(2)
  const isAdmin = JSON.parse(localStorage.getItem('@foodexplorer:user')).isAdmin
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`)
      setData(response.data)
    }

    fetchDish()
  }, [])

  function handleBack() {
    navigate(-1)
  }

  const handleIncrement = () => {
    handleUpdateCount(count + 1)
  }
  const handleDecrement = () => {
    handleUpdateCount(count - 1)
  }
  const handleUpdateCount = (newCount) => {
    if (newCount >= 1) {
      setCount(newCount)
    }
  }
  function addToChart() {
    try {
      if (count > 1) {
        toast.success('Os produtos foram adicionados ao carrinho!')
      } else {
        toast.success('O Produto foi adicionado ao carrinho!')
      }
    } catch (e) {
      toast.error('Erro ao adicionar ao carrinho!')
    }
  }

  async function handleRemoveDish() {
    const confirm = window.confirm('Deseja realmente deletar este prato?')

    if (confirm) {
      try {
        await api.delete(`/dishes/${params.id}`)
        toast.success('Prato deletado com sucesso!')
        navigate(-1)
      } catch (error) {
        toast.error('Erro ao deletar prato!')
      }
    }
  }

  return (
    <Container>
      <div className="backdiv" title="voltar">
        <PiArrowArcLeftDuotone onClick={handleBack} />
        Voltar
      </div>
      <div className="page-wrapper">
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
                <TiMinus
                  className="cursor-hability-pointer"
                  onClick={handleDecrement}
                />
                <span id="count">{count}</span>
                <TiPlus
                  className="cursor-hability-pointer"
                  onClick={handleIncrement}
                />
              </div>
              {isAdmin ? (
                <Button
                  icon={PiTrashLight}
                  title={`deletar prato`}
                  onClick={handleRemoveDish}
                />
              ) : (
                <Button
                  icon={PiReceiptLight}
                  title={`pedir ∙ ${price}`}
                  onClick={addToChart}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
