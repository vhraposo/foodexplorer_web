import styled from 'styled-components'
export const Container = styled.div`
  overflow: hidden;
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-rows: 114px 1fr 77px;
  grid-template-columns: auto;
  grid-template-areas:
    'header'
    'content'
    'footer';
  > div:first-child {
    grid-area: header;
  }
  Header {
    width: 100%;
    height: 11.4rem;
  }
  .backdiv {
    svg {
      display: flex;
      margin: 2rem 0;
      font-size: 3.2rem;
      cursor: pointer;
    }
  }
  > div:nth-child(3) {
    grid-area: footer;
  }
  > main {
    grid-area: content;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 0 32px;
    align-items: center;
    > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      max-width: 112rem;
      width: 100%;
      > button {
        font-size: 1.6rem;
        margin: 1.2rem 0 3.2rem;
        line-height: 140%;
        font-weight: 500;
      }
      > h2 {
        font-size: 3.2rem;
        font-family: poppins;
        font-weight: 500;
        line-height: 140%;
        margin-bottom: 2.4rem;
        align-self: self-start;
      }
    }

    @media (min-width: 700px) {
      @media (min-width: 700px) {
        > div {
          button {
            margin: 2.2rem 0 3.2rem;
            font-size: 2.4rem;
            font-weight: 700;
            line-height: 140%;
          }
        }
      }
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  width: 100%;

  input {
    height: 5rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  .ingredients-input {
    padding: 3.8px;
  }
  .ingredient-wrapper {
    display: flex;
    flex-direction: column;

    > label {
      font-family: 'Roboto';
      width: fit-content;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    > div {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;

      padding: 0.8rem 1rem;
      border-radius: 0.8rem;
      background: ${({ theme }) => theme.COLORS.DARK_800};

      transition: 0.2s;

      &:has(input:focus) {
        background: ${({ theme }) => theme.COLORS.DARK_900};
      }
    }
  }

  @media (min-width: 700px) {
    gap: 3.2rem;
    max-width: 112rem;

    > div {
      display: flex;

      flex-direction: row;
    }
    > div:first-child {
      > div:nth-child(1) {
        max-width: 23rem;
      }
      > div:nth-child(3) {
        max-width: 36.4rem;
      }
    }
    > div:nth-child(2) {
      > div:nth-child(2) {
        max-width: 25rem;
      }
    }
    > div:nth-child(3) {
      flex-direction: column;
      gap: 3.2rem;
    }
  }
`
export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3.2rem;
  width: 100%;
  justify-content: flex-end;
  > button {
    width: 100%;
    padding: 1.2rem 2.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    border-radius: 5px;
    font-size: 1.4rem;
    line-height: 2.4rem;
    font-weight: 500;
    @media (min-width: 800px) {
      width: auto;
    }
  }
  > button:first-child {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
  }
  > button:nth-child(2) {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
  }
`
export const TagsWrapper = styled.div`
  display: flex;
  gap: 1.6rem;
  flex-wrap: wrap;
  padding: 8px;
  min-height: 4.2rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  border-radius: 8px;
  box-sizing: border-box;
`
export const InputFile = styled.div`
  display: flex;
  width: 100%;
  height: 4.8rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  border-radius: 8px;

  > label {
    display: flex;
    gap: 8px;
    align-items: center;

    height: 100%;
    width: 100%;
    cursor: pointer;
    > svg {
      margin-left: 3.2rem;
    }
    > input {
      display: none;
    }
  }
`
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  > select {
    appearance: none;
    -webkit-appearance: none;

    background-image: url("data:image/svg+xml,%3Csvg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.4545 8.75358C4.89384 8.31424 5.60616 8.31424 6.0455 8.75358L12 14.7081L17.9545 8.75358C18.3938 8.31424 19.1062 8.31424 19.5455 8.75358C19.9848 9.19292 19.9848 9.90523 19.5455 10.3446L12.7955 17.0946C12.3562 17.5339 11.6438 17.5339 11.2045 17.0946L4.4545 10.3446C4.01517 9.90523 4.01517 9.19292 4.4545 8.75358Z' fill='%23C4C4CC'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: right 1.6rem top 50%;
    width: 100%;
    height: 4.8rem;

    padding: 0 16px;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border-radius: 8px;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
  > label {
    display: flex;
    flex-direction: column;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 100%;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    margin-bottom: 16px;
  }
  > textarea {
    width: 100%;
    height: 17.2rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    resize: none;
    border: none;
    border-radius: 8px;
    padding: 1.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};

    ::placeholder {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 100%;
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`
