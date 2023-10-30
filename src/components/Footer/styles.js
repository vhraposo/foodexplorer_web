import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  height: 7.7rem;
  width: 100%;

  align-items: center;
  justify-content: space-between;
  padding: 4rem 2.8rem;
  margin-top: 1rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  > img {
    height: clamp(1.8rem, 1.442rem + 0.943vw, 2.8rem);
  }

  > span {
    font-size: clamp(1.2rem, 1.128rem + 0.189vw, 1.4rem);
  }
`
