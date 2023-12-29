import { useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { FiEdit2 } from 'react-icons/fi'
import { PiReceiptLight } from 'react-icons/pi'
import { TiMinus, TiPlus } from 'react-icons/ti'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Button } from '../../components/Button'
import { api } from '../../services/api'

export const Card = ({ dish, handleDetails, isMobile2 }) => {
  const [count, setCount] = useState(1)
  const navigate = useNavigate()
  const [dishName, setDishName] = useState('')

  const handleEdit = async (dishId) => {
    try {
      const response = await api.get(`/dishes/${dishId}`)
      const dishDetails = response.data

      navigate(`/edit/${dishId}`, { state: { dishDetails } })
    } catch (error) {
      toast.error('Erro ao carregar os dados do prato!')
    }
  }

  function handleIncrement() {
    if (count < 15) {
      setCount(count + 1)
    }
  }
  function handleDecrement() {
    if (count > 1) {
      setCount(count - 1)
    }
  }
  const updatedPrice = (dish.price * count).toFixed(2)

  function addToChart() {
    try {
      const totalProducts = count

      if (totalProducts === 1) {
        toast.success('Produto adicionado ao carrinho!')
      } else {
        toast.success(
          `${totalProducts} produtos foram adicionados ao carrinho!`,
        )
      }
    } catch (e) {
      toast.error('Erro ao adicionar produto ao carrinho!')
    }
  }
  function handleFavorite() {
    try {
      toast.success('Produto adicionado aos favoritos!')
    } catch (e) {
      toast.error('Erro ao adicionar produto aos favoritos!')
    }
  }
  const isAdmin = JSON.parse(localStorage.getItem('@foodexplorer:user')).isAdmin

  return (
    <li className="splide__slide" key={dish.id}>
      <div className="splide__slide__container">
        {isAdmin ? (
          <FiEdit2 onClick={() => handleEdit(dish.id)} />
        ) : (
          <AiOutlineHeart onClick={handleFavorite} />
        )}

        <img
          src={dish.image}
          alt={dish.name}
          onClick={() => handleDetails(dish.id)}
        />
        <div className="splide__slide__container__info">
          <h3>{dish.name}</h3>
          <p>{dish.description}</p>
          <h1>{dish.price}</h1>

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
            {isMobile2 ? (
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
}
