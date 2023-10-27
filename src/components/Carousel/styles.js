import styled from "styled-components";

export const Container = styled.section`

    display: grid;
    gap: 1.6rem;

    #carousel-heading{
        font-size: clamp(1.8rem, 1.298rem + 1.321vw, 3.2rem);
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        margin-left: 2.4rem;
    }
        
    .splide__list{
            display: flex;
            gap: 1.6rem;
            justify-content: center;
    }

    .splide__slide__container{

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        background-color: ${({ theme }) => theme.COLORS.DARK_300};
        width: 21rem;
        height: 29.2rem;
        border-radius: .8rem;

        transition: ease-in-out 150ms;

        &:hover{
            box-shadow: 
            0 0 0 1px #344f56,
            0 0 0 1px #344f56;  
        }

        >svg{
            width: 2.4rem;
            height: 2.2rem;
            position: absolute;
            right: 1.6rem;
            top: 1.6rem;

            cursor: pointer;

            transition: fill 0.5s;

            &:hover{
                animation: beat 0.5s alternate infinite, fillHeart 0.5s ease forwards;
            }
        }

        & img{
            width: 10rem;
            height: 10rem;
            object-fit: cover;

            border-radius: 5rem;
            border: 2px solid #324959;

            box-shadow: 
            0 0 0 1px #0A1012,
            0 0 0 2px #0A1012;  
        }

        & h3{
            text-align: center;
            margin-top: 1.2rem;
            font-size: clamp(1.4rem, 1.042rem + 0.943vw, 2.4rem);
            font-weight: 500;
            line-height: 2.4rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }

        & h1{
                font-family: 'Roboto';
                font-size: clamp(1.6rem, 1.026rem + 1.509vw, 3.2rem);
                font-style: normal;
                font-weight: 400;
                color: ${({ theme }) => theme.COLORS.LIGHTBLUE_200};
                text-align: center;
                margin: 1.2rem auto;
            }

        .inputstepper{
            width: 100%;
            margin-top: 1rem;
            gap: 1.5rem;
            
            >svg{
                font-size: clamp(0.625rem, 0.401rem + 0.59vw, 1.25rem);
            }   
        }

        .input-stepper-child{
            display: flex;
            align-items: center;
            justify-content: center;

            gap: 1.5rem;
            margin-bottom: 1.6rem;

            >span{
                font-family: 'Roboto';
                font-size: clamp(1.6rem, 1.457rem + 0.377vw, 2rem);
                font-style: normal;
                font-weight: 700;
            }
            .cursor-hability-pointer{
            cursor: pointer;
            width: 2.4rem;
            height: 2.4rem;

                &:hover{
                    transform: scale(1.1);
                    background-color: ${({ theme }) => theme.COLORS.DARK_800};
                    border-radius: 50%;
                }
            }    
        }

            button{
                display: flex;
                align-items: center;
                justify-content: center;

                width: 16.2rem;
                height: 3.2rem;
                padding: 1.2rem 2.4rem;

                background-color: ${({ theme }) => theme.COLORS.RED_200};
            }
    } 


    @keyframes beat {
                0% {
                transform: scale(1);
            }
                100% {
                transform: scale(1.2);
                }
            }

             @keyframes fillHeart {
                to {
                fill: red;
                }
            }

`


