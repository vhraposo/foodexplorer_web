import styled from "styled-components"

export const Container = styled.footer`
    grid-area: footer;
   
    height: 11.4rem;
    width: 100%;

    background-color: ${({ theme }) => theme.COLORS.DARKBLUE_600};;
    box-shadow: 0px -4px 4px rgba(50, 50, 50, 0.1);
    display: flex;
    justify-content: space-between;

    
    > div{
        display: flex;
        justify-content: center;
        align-items: center;

        gap: 1rem;
        margin-top: 2rem;

        padding: 2.4px 123px;
        
        
        >img{
            width: 3rem;
            height: 3rem;     
        }

        >span{
            
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            color: ${({ theme }) => theme.COLORS.LIGHT_700};;

            font-family: 'Roboto';
            font-size: clamp(1.5rem, 1.177rem + 0.849vw, 2.4rem);
            font-style: normal;
            font-weight: 700;
            line-height: normal;
        }

        >p{
            color: ${({ theme }) => theme.COLORS.LIGHT_200};;

            text-align: right;
            font-family: DM Sans;
            font-size: clamp(1.2rem, 1.128rem + 0.189vw, 1.4rem);
            
            

        }
    }
`



