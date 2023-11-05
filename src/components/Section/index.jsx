import { PiArrowArcLeftDuotone, PiReceiptLight } from 'react-icons/pi'
import { TiMinus, TiPlus } from 'react-icons/ti'
import { Button } from '../../components/Button'
import { Container } from './styles'

import dish from '../../assets/dish.png'

export function Section({ title, children }) {
  return (
    <Container>
      <div className="backdiv" title="voltar">
        <PiArrowArcLeftDuotone />
        Voltar
      </div>

      <div className="wrap">
        <img src={dish} alt="" />
        <div className="dish-info">
          <h2 className="section-title">{title}</h2>
          {children}

          <p className="section-description">
            Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O
            pão naan dá um toque especial.
          </p>
          <ul className="section-ingredients">
            <li>Ingrediente</li>
            <li>Ingrediente</li>
            <li>Ingrediente</li>
            <li>Ingrediente</li>
            <li>Ingrediente</li>
            <li>Ingrediente</li>
            <li>Ingrediente</li>
          </ul>

          <div className="inputstepper">
            <div className="input-stepper-child">
              <TiMinus className="cursor-hability-pointer" />
              <span id="count">1</span>
              <TiPlus className="cursor-hability-pointer" />
            </div>

            <Button icon={PiReceiptLight} title="pedir ∙ R$ 25,00" />
          </div>
        </div>
      </div>
    </Container>
  )
}
