import { useEffect, useState } from 'react'
import { LuUpload } from 'react-icons/lu'
import { PiArrowArcLeftDuotone } from 'react-icons/pi'
import { useNavigate, useParams } from 'react-router-dom'
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

export function Edit() {
  const navigate = useNavigate()
  const [dishDetails, setDishDetails] = useState({})
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const [image, setImage] = useState('')
  const [imageFile, setImageFile] = useState(null)
  const [imagePreview, setImagePreview] = useState('')

  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')

  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState([''])

  function handleChangeImage(event) {
    const file = event.target.files[0]
    setImageFile(file)
    const imagePreview = URL.createObjectURL(file)
    setImage(imagePreview)

    const reader = new FileReader()
    reader.onload = (e) => {
      setImagePreview(e.target.result)
      toast.success('Imagem carregada com sucesso!')
    }
    reader.readAsDataURL(file)
  }

  function handleAddIngredient() {
    if (!newIngredient) return

    setIngredients([...ingredients, { name: newIngredient }])
    setNewIngredient('')
  }
  function handleDeleteIngredient(ingredient) {
    setIngredients((prevState) =>
      prevState.filter((item) => item !== ingredient),
    )
  }
  const formatCurrency = (value) => {
    const numericValue = value.replace(/[^\d]/g, '')

    const formattedValue = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    }).format(numericValue / 100)

    return formattedValue
  }

  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/dishes/${id}`)
        const dish = response.data
        setDishDetails(dish)
        setName(dish.name)
        setDescription(dish.description)
        setImage(dish.image ? dish.image : null)
        setPrice(dish.price)
        setCategory(dish.category)
        setIngredients(dish.ingredients)
      } catch (error) {
        toast.error('Erro ao carregar os dados do prato!')
      }
    }

    fetchData()
  }, [])

  const handleSubmit = async () => {
    const formattedPrice = formatCurrency(price)
    const ingredientNames = ingredients.map((ingredient) => ingredient.name)

    await api.put(`/dishes/${dishDetails.id}`, {
      name,
      description,
      image,
      price: formattedPrice,
      category,
      ingredients: ingredientNames,
    })
    toast.success('Prato atualizado com sucesso!')
    navigate('/')
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
          <h2>Editar prato</h2>
        </div>

        <Form>
          <div>
            <InputWrapper>
              <label> Imagem do prato</label>
              <InputFile onChange={handleChangeImage}>
                <label htmlFor="img">
                  {<LuUpload size={24} />}
                  <span>Selecione a imagem</span>
                  <input type="file" id="img" />
                </label>
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Image preview"
                    style={{
                      width: '120px',
                      height: '120px',
                      borderRadius: '10px',
                      marginTop: '-16rem',
                      marginLeft: '10rem',
                    }}
                  />
                )}
              </InputFile>
            </InputWrapper>
            <InputWrapper>
              <label>Nome</label>
              <Input
                dark={false}
                placeholder="Ex: Salada Ceaser"
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                }}
              />
            </InputWrapper>
            <InputWrapper>
              <label>Categoria</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option disabled selected>
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
                    value={ingredient.name}
                    onClick={() => handleDeleteIngredient(ingredient)}
                    style={{ width: `${ingredient.name.length / 1.15}rem` }}
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
                value={formatCurrency(price)}
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
                value={description}
              />
            </InputWrapper>

            <ButtonsWrapper>
              <Button
                title="Salvar alterações"
                onClick={() => {
                  handleSubmit()
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
