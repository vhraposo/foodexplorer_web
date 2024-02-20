import styled from 'styled-components'

export const Container = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  font-size: 1.6rem;

  input {
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    height: 4rem;
    padding: 1.2rem 4rem;

    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 8px;
  }
  > svg {
    position: absolute;
    top: 3.5rem;
    left: 1rem;
    font-size: 1.6rem;
  }

  @media (min-width: 700px) {
    svg {
      font-size: 2rem;
      top: 3.5rem;
    }
  }
`
