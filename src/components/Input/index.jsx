import { Container } from './styles.js'

export function Input({ label, value, icon: Icon, ...rest }) {
  return (
    <Container>
      {label}
      {Icon && <Icon />}
      <input {...rest} />
    </Container>
  )
}
