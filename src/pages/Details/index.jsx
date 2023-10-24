import { Container } from "./styles"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"

export function Details(){
  
  return(
    <Container>
      <Header />
      <Button title="incluir ∙ R$ 25,00" loading />
    </Container>
  )
}