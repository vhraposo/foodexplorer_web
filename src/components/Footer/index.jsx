import { Container } from "./styles";
import footlogo from '../../assets/graylogo.svg'

export function Footer() {
 return( <Container>
    <img src={footlogo}/>
    <span>© 2023 - Todos os direitos reservados.</span>
  </Container>)
}