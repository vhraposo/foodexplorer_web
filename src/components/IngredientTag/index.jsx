import { Container } from './styles'

import { PiPlus } from 'react-icons/pi'
import { TfiClose } from 'react-icons/tfi'

export function IngredientTag({ value, isNew = false, onClick, ...rest }) {
  return (
    <Container $isnew={isNew.toString()}>
      <input
        readOnly={!isNew}
        value={value}
        autoComplete="off"
        maxLength={30}
        {...rest}
      />

      <button type="button" onClick={onClick}>
        {isNew ? <PiPlus /> : <TfiClose />}
      </button>
    </Container>
  )
}
