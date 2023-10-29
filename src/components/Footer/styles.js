import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  height: 7.7rem;
  width: 100%;

  align-items: center;
  justify-content: space-between;
  padding: 0 2.8rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  > img {
    height: clamp(1.8rem, 1.442rem + 0.943vw, 2.8rem);
    resize: cotain;
  }

  > span {
    font-family: 'DM sans';
    font-size: clamp(1.2rem, 1.128rem + 0.189vw, 1.4rem);
  }
`
