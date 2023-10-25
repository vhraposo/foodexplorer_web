import { Container } from "./styles"

import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Footer } from "../../components/Footer"


export function Details(){
  
  return(
    <Container>
      <Header />

      <Section title="Salada Ravanello" />
      

      <Footer/>
    </Container>
  )
}