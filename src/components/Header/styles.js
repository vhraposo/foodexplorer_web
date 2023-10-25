import styled from "styled-components"

export const Container = styled.header`
    grid-area: header;
   
    height: 11.4rem;
    width: 100%;

    background-color: ${({ theme }) => theme.COLORS.DARKBLUE_600};;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.DARKBLUE_600};

    display: flex;
    justify-content: space-between;

    

    > div{
        display: flex;
        justify-content: center;
        align-items: center;

        gap: 1rem;
        margin-top: 2rem;
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
    margin-top: 2rem;
    display: flex;
    align-items: center;

    > svg{
        width: 3.2rem;
        height: 2.2rem;
        flex-shrink: 0;

        margin-right: 1.6rem;
    }

`

export const Menu = styled.button`
    border: none;
    background: none;

    margin-top: 2rem;
    display: flex;
    align-items: center;
    

    > svg{
        width: 2.4rem;
        height: 1.8rem;
        margin-left: 1.6rem;
        
    }

`


