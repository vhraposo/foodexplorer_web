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
  .haveAccount {
    color: white;
    font-family: Poppins;
    font-size: 1.4rem;
  }

  .image-logo {
    display: flex;
    align-items: center;
    gap: 1rem;

    h1 {
      font-size: clamp(3.7rem, 3.521rem + 0.472vw, 4.2rem);
    }

    @media (min-width: 700px) {
      margin: 0 200px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media (min-width: 700px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    max-width: 1440px;
    margin-inline: auto;
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

  @media (min-width: 700px) {
    margin-top: 0;
    background: var(--dark-dark-700, #001119);
    border-radius: 0.8rem;
    width: 45rem;

    flex-wrap: wrap;

    padding: 6.4rem;

    h2 {
      font-size: clamp(3rem, 2.928rem + 0.189vw, 3.2rem);
    }

    input {
      height: 48px;
    }
  }
`
