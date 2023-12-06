import { useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { PiReceiptLight } from 'react-icons/pi'
import { TiMinus, TiPlus } from 'react-icons/ti'
import { toast } from 'react-toastify'
import { Button } from '../../components/Button'

export const Card = ({ dish, handleDetails, isMobile2 }) => {
  const [count, setCount] = useState(1)

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

  return (
    <li className="splide__slide" key={dish.id}>
      <div className="splide__slide__container">
        <AiOutlineHeart onClick={handleFavorite} />
        <img
          src={dish.image}
          alt={dish.name}
          onClick={() => handleDetails(dish.id)}
        />
        <div className="splide__slide__container__info">
          <h3>{dish.name}</h3>
          <p>{dish.description}</p>
          <h1>R$ {dish.price}</h1>

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
