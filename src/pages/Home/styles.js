import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
`
export const Brand = styled.div`
  grid-area: brand;
  background-color: ${({ theme }) => theme.COLORS.DARKBLUE_600};
  border-radius: 5px;

  width: 87%;
  height: 12rem;
  display: flex;
  align-items: center;

  margin: 4.4rem auto 6.2rem 4.4rem;

  > img {
    margin-bottom: 4rem;
    width: clamp(19.1rem, 3.291rem + 41.604vw, 63.2rem);
    height: clamp(12rem, 1.747rem + 26.981vw, 40.6rem);

    position: relative;
    left: -1.5rem;
  }
  > div {
    display: flex;
    flex-direction: column;

    gap: 3px;

    > h2 {
      font-size: clamp(1.7rem, 0.875rem + 2.17vw, 4rem);
    }
    > p {
      font-size: clamp(1.2rem, 1.057rem + 0.377vw, 1.6rem);
    }
  }
`

export const Content = styled.div`
  flex: 1;
  > section {
    display: grid;
  }
`
