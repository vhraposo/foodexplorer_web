import { Container } from './styles'
import { Button } from "../../components/Button"
import { PiArrowArcLeftDuotone, PiReceiptLight } from 'react-icons/pi'
import { TiMinusOutline, TiPlusOutline } from 'react-icons/ti'



import dish from '../../assets/dish.png'

export function Section({ title, children }){
     return (
        
        <Container>
            <div className='backdiv'>
                <PiArrowArcLeftDuotone />
                Voltar
            </div>

            <div className='imagediv'>
                <img src={dish} alt="" />
            </div>

            <h2>{title}</h2>
            {children}

            <p>
                 Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.
            </p>

            <ul>
                <li>Ingrediente</li>
                <li>Ingrediente</li>
                <li>Ingrediente</li>
                <li>Ingrediente</li>
                <li>Ingrediente</li>
                <li>Ingrediente</li>
            </ul>

            <div className='inputstepper'>

                <div className='input-stepper-child'>
                    <TiMinusOutline className='cursor-hability-pointer' />
                    <span id="count">1</span>
                    <TiPlusOutline className='cursor-hability-pointer'/>

                </div>
               
                <Button icon={PiReceiptLight} title="pedir ∙ R$ 25,00" />
        
            </div>

        </Container>
    )
}