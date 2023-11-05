import styled, { css, keyframes } from 'styled-components'

const slideIn = keyframes`
  from {
    width: 0;
    opacity: 0;
  }
  to {
    width: 100%;
    opacity: 1;
  }
`

const slideOut = keyframes`
  0% {
    width: 100%;
    opacity: 1;
  }
  100% {
    width: 0;
    opacity: 0;
    display: none;
  }
`

export const Container = styled.header`
  grid-area: header;
  padding: 3rem;
  height: 21.4rem;
  width: 100%;
  margin-bottom: 2.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARKBLUE_600};

  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background-color: transparent;
    border: none;
    width: fit-content;
    min-height: fit-content;
  }
  button svg {
    width: 3.2rem;
    height: 3.2rem;
  }

  .hidden {
    display: none;
  }

  .receipt-icon {
    display: flex;
    align-items: center;
    margin-left: 5rem;
  }

  @media (min-width: 700px) {
    header {
      width: 100%;
    }
    .heading-one {
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 100%;
    }
    .input-search {
      width: 70rem;
      > svg {
        display: initial;
      }
      > input {
        display: initial;
      }
    }

    .menu-open {
      animation: none;
      display: flex;
      flex-direction: row;
    }

    .receipt-icon {
      display: none;
    }

    .logo {
      display: none;
    }

    .orders-logout {
      display: flex;
    }

    button:first-child {
      display: none;
    }

    .orders-button {
      display: flex !important;
      align-items: center;
      gap: 1rem;
      background-color: ${({ theme }) => theme.COLORS.RED_100};
      width: 15.2rem;
      height: 4.8rem;
      margin-right: 3.2rem;

      > svg {
        width: 2.4rem;
        height: 2.4rem;
      }
    }
  }

  .menu-open {
    ${({ $menuIsOpen }) =>
      $menuIsOpen
        ? css`
            animation: ${slideIn} 0.5s ease-in-out;
            display: flex;
            flex-direction: column;
          `
        : css`
            animation: ${slideOut} 0.5s ease-in-out forwards;
          `}

    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.COLORS.DARKBLUE_600};
    padding: 0 3.2rem;
    position: fixed;
    z-index: 9999;
    top: 0;
    bottom: 0;
    left: 0;
    margin: unset;
    .heading-menu {
      display: flex;
      align-items: center;
      gap: 1.6rem;

      height: 10rem;
      width: 100%;

      > svg {
        width: 3.2rem;
        height: 3.2rem;
        cursor: pointer;
      }
      > h2 {
        font-size: 2.1rem;
        font-style: normal;
        font-weight: 400;
      }
    }

    ul {
      flex: 1;
      li {
        font-size: 2.4rem;

        display: flex;
        align-items: center;

        margin-top: 2rem;
        border-bottom: 1px solid var(--dark-dark-1000, #192227);

        a {
          color: ${({ theme }) => theme.COLORS.LIGHT_300};
          text-decoration: none;
        }
      }
    }
    footer {
      min-height: 4.8rem;
      min-width: 42.8rem;
      background: transparent;
      border-top: 1px solid var(--dark-dark-1000, #192227);
    }
  }

  .input-search {
    display: flex;
    align-items: center;
    position: relative;

    > input {
      background-color: #0d1d25;
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      border: none;
      width: 100%;
      height: 4.8rem;
      padding-left: 5rem;
      border-radius: 0.5rem;
    }

    input::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      font-family: Roboto;
      font-size: 1.6rem;
    }

    > svg {
      width: 2.25rem;
      height: 2.25rem;
      position: absolute;

      fill: ${({ theme }) => theme.COLORS.LIGHT_300};
      margin: 1.4rem;
    }
  }

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 1rem;

    svg {
      margin-left: 5rem;
    }

    > img {
      width: 3rem;
      height: 3rem;
    }

    > span {
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      font-family: Roboto;
      font-size: clamp(2.1rem, 1.992rem + 0.283vw, 2.4rem);
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
`

export const Logout = styled.button`
  border: none;
  background: none;
  display: flex;
  align-items: center;

  > svg {
    width: 3.2rem;
    height: 3.2rem;
  }
`
