import styled, { keyframes, css } from "styled-components";

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
  from {
    width: 100%;
    opacity: 1;
  }
  to {
    width: 0;
    opacity: 0;
  }
`




export const Container = styled.header`
    grid-area: header;
    padding: 1.6rem;
    height: 11.4rem;
    width: 100%;

    background-color: ${({ theme }) => theme.COLORS.DARKBLUE_600};
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.DARKBLUE_600};

    display: flex;
    justify-content: space-between;
    align-items: center;

    button{
        background-color: transparent;
        border: none;
        width: fit-content;
        min-height: fit-content;       
    }
    button svg{
        width: 3.2rem;
        height: 3.2rem;    
    }
    
    .menu-open{
        ${({ $menuIsOpen }) =>
      $menuIsOpen
        ? css`
            animation: ${slideIn} 0.5s ease-in-out;
            display: block;
          `
        : css`
            animation: ${slideOut} 0.5s ease-in-out;
            
          `}

        width: 100%;
        height: 100%;
        background-color: ${({ theme }) => theme.COLORS.DARKBLUE_600};
        padding: 2.4rem 3.2rem;
        position: absolute;
        z-index: 9999;
        top: 0;
        bottom: 0;
        left: 0;
        margin: unset;
        transition: all 5.3s ease-in-out;
        .heading-menu{
            display: flex;
            align-items: center;
            gap: 1.6rem;

            height: 11.4rem;
            width: 100%;

            >svg{
            width: 3.2rem;
            height: 3.2rem;
            cursor: pointer;
            }
            >h2{
                font-size: 2.1rem;
                font-style: normal;
                font-weight: 400;

            }
        }

        ul{
            li{
                font-size: 2.4rem;

                display: flex;
                align-items: center;
                
                margin-top: 2rem;
                border-bottom: 1px solid var(--dark-dark-1000, #192227);
  
            a{
                color: ${({ theme }) => theme.COLORS.LIGHT_300};
                text-decoration: none;
            }
            }
        }
    }
    
    .logo{
        display: flex;
        justify-content: center;
        align-items: center;

        gap: 1rem;
        
        >img{
            width: 3rem;
            height: 3rem;          
        }

        > span{
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

    > svg{
        width: 3.2rem;
        height: 3.2rem;
    }

`



