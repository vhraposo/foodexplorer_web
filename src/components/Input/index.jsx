import { Container } from './styles.js'

export function Input({ label, icon: Icon, ...rest }) {
  return (
    <Container>
      {label}
      {Icon && <Icon />}
      <input {...rest} />
    </Container>
  )
}
