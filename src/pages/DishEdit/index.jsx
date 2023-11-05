import { LuUpload } from 'react-icons/lu'
import { PiArrowArcLeftDuotone } from 'react-icons/pi'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'

import {
  ButtonsWrapper,
  Container,
  Form,
  InputFile,
  InputWrapper,
  TagsWrapper,
} from './styles'

export function DishEdit() {
  return (
    <Container>
      <Header />
      <main>
        <div className="backdiv" title="voltar">
          <PiArrowArcLeftDuotone title="Voltar" />
          <h2>Novo prato</h2>
        </div>

        <Form>
          <div>
            <InputWrapper>
              <label> Imagem do prato</label>
              <InputFile>
                <label htmlFor="img">
                  {<LuUpload size={24} />}
                  <span>{'Selecione a imagem'} </span>
                  <input type="file" id="img" />
                </label>
              </InputFile>
            </InputWrapper>
            <InputWrapper>
              <label>Nome</label>
              <Input dark={false} placeholder="Ex: Salada Ceaser" />
            </InputWrapper>
            <InputWrapper>
              <label>Categoria</label>
              <select>
                <option value="" disabled selected>
                  Selecione a categoria
                </option>
              </select>
            </InputWrapper>
          </div>
          <div>
            <InputWrapper>
              <label>Ingredientes</label>
              <TagsWrapper>
                <Input placeholder="Adicionar" isNew={true} />
              </TagsWrapper>
            </InputWrapper>
            <InputWrapper>
              <label>Preço</label>
              <Input value="25.00" dark={false} placeholder="R$ 00,00" />
            </InputWrapper>
          </div>
          <div>
            <InputWrapper>
              <label>Descrição</label>
              <textarea
                value=""
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              />
            </InputWrapper>
            <ButtonsWrapper>
              <Button title="Salvar alterações" />
            </ButtonsWrapper>
          </div>
        </Form>
      </main>
      <Footer />
    </Container>
  )
}
