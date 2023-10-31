import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;

  .hidden {
    display: none;
  }

  .image-logo {
    display: flex;
    align-items: center;
    gap: 1rem;

    h1 {
      font-size: 3.7rem;
    }
  }
`

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-top: 9rem;

  width: 31.6rem;
  gap: 3rem;

  button {
    height: 4.8rem;
    margin-top: 1rem;
  }
`
