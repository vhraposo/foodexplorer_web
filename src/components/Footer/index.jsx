
import { Container } from "./styles"
import graylogo from "../../assets/graylogo.png"

export function Footer(){
    return(
        <Container>
            
                <div>
                    <img src={graylogo} alt="Logo" />
                    <span>food explorer</span>
                    <p>© 2023 - Todos os direitos reservados.</p>
                </div>

    
        </Container>
    )
}