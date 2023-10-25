import styled from "styled-components"

export const Container = styled.header`
    grid-area: header;
   


    height: 10.5rem;
    width: 100%;

    background-color: ${({ theme }) => theme.COLORS.DARKBLUE_600};;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.DARKBLUE_600};

    display: flex;
    justify-content: space-between;

    padding: 0 8rem;

    > div{
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
            font-size: 2.4rem;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
        }
    }
`

export const Logout = styled.button`
    border: none;
    background: none;

    > svg{
        width: 3.2rem;
        height: 3.2rem;
        flex-shrink: 0;
    }

`


