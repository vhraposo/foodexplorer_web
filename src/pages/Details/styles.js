import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.5rem 1fr auto;
  grid-template-areas:
    'header'
    'content'
    'footer';

  header {
    height: 12rem;
  }
  footer {
  }
`
