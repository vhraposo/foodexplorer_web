import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.RED_100};

  height: 5.6rem;
  border: 0;
  padding: 0 1.6rem;

  border-radius: 0.3rem;

  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`
