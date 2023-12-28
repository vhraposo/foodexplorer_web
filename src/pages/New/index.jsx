import { useState } from 'react'
import { LuUpload } from 'react-icons/lu'
import { PiArrowArcLeftDuotone } from 'react-icons/pi'
import { useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const [image, setImage] = useState('')
  const [imageFile, setImageFile] = useState(null)

  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')

  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState([''])

  function handleChangeImage(event) {
    const file = event.target.files[0]
    setImageFile(file)

    const imagePreview = URL.createObjectURL(file)
    setImage(imagePreview)
  }

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
          <PiArrowArcLeftDuotone
            title="Voltar"
            onClick={() => {
              navigate('/')
            }}
          />
          <h2>Novo prato</h2>
        </div>

        <Form>
          <div>
            <InputWrapper>
              <label> Imagem do prato</label>
              <InputFile onChange={handleChangeImage}>
                <label htmlFor="img">
                  {<LuUpload size={24} />}
                  <span>{'Selecione a imagem'} </span>
                  <input type="file" id="img" />
                </label>
              </InputFile>
            </InputWrapper>
            <InputWrapper>
              <label>Nome</label>
              <Input
                dark={false}
                placeholder="Ex: Salada Ceaser"
                onChange={(e) => setName(e.target.value)}
              />
            </InputWrapper>
            <InputWrapper>
              <label>Categoria</label>
              <select onChange={(e) => setCategory(e.target.value)}>
                <option value="" disabled selected>
                  Selecione a categoria
                </option>
                <option value="Bebidas">Bebidas</option>
                <option value="Massas">Massas</option>
                <option value="Sobremesas">Sobremesas</option>
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
              <Input
                value="25.00"
                dark={false}
                placeholder="R$ 00,00"
                onChange={(e) => setPrice(e.target.value)}
              />
            </InputWrapper>
          </div>
          <div>
            <InputWrapper>
              <label>Descrição</label>
              <textarea
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                onChange={(e) => setDescription(e.target.value)}
              />
            </InputWrapper>

            <ButtonsWrapper>
              <Button
                title="Salvar alterações"
                onClick={() => {
                  handleAddNewDish()
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
