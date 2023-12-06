import { useState } from 'react'
import { LuUpload } from 'react-icons/lu'
import { PiArrowArcLeftDuotone } from 'react-icons/pi'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'

import { toast } from 'react-toastify'
import { IngredientTag } from '../../components/IngredientTag'
import { api } from '../../services/api'
import {
  ButtonsWrapper,
  Container,
  Form,
  InputFile,
  InputWrapper,
} from './styles'

export function New() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const [image, setImage] = useState('')

  const [price, setPrice] = useState([])
  const [category, setCategory] = useState([''])

  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState([''])

  async function handleAddNewDish() {
    if (!name) {
      toast.error('O campo name é obrigatório!')
    } else if (!description) {
      toast.error('O campo description é obrigatório!')
    } else if (!image) {
      toast.error('O campo image é obrigatório!')
    } else if (!price) {
      toast.error('O campo price é obrigatório!')
    } else if (!category) {
      toast.error('O campo category é obrigatório!')
    } else if (!ingredients) {
      toast.error('O campo ingredients é obrigatório!')
    }
    await api.post('/dishes', {
      name,
      description,
      image,
      price,
      category,
      ingredients,
    })
  }

  function handleAddIngredient() {
    if (!newIngredient) return

    setIngredients([...ingredients, newIngredient])
    setNewIngredient('')
  }
  function handleDeleteIngredient(ingredient) {
    setIngredients((prevState) =>
      prevState.filter((item) => item !== ingredient),
    )
  }
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
                <option value="">Bebidas</option>
                <option value="">Massas</option>
                <option value="">Sobremesas</option>
              </select>
            </InputWrapper>
          </div>
          <div>
            <InputWrapper className="ingredient-wrapper">
              <label htmlFor="ingredient">Ingredientes</label>
              <div>
                {ingredients.map((ingredient, index) => (
                  <IngredientTag
                    key={index}
                    value={ingredient}
                    onClick={() => handleDeleteIngredient(ingredient)}
                    style={{ width: `${ingredient.length / 1.15}rem` }}
                  />
                ))}

                <IngredientTag
                  id="ingredient"
                  isNew={true.toString()}
                  placeholder="Adicionar"
                  value={newIngredient}
                  onChange={(event) => setNewIngredient(event.target.value)}
                  onClick={handleAddIngredient}
                  style={{ width: `${newIngredient.length / 1.15}rem` }}
                />
              </div>
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
              <Button
                title="Salvar alterações"
                onClick={() => {
                  toast.success('Prato cadastrado com sucesso!')
                }}
              />
            </ButtonsWrapper>
          </div>
        </Form>
      </main>
      <Footer />
    </Container>
  )
}
