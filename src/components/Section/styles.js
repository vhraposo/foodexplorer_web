import styled from "styled-components";

export const Container = styled.section`
    margin: 3.6rem  3rem;
   


        >.backdiv{
            
            width: fit-content;
            font-size: 24px;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 5px;

            margin-left: 0.5px;

            >svg{
                width: 3.2rem;
                height: 3.2rem;

                cursor: pointer;
            }

            &hover{

            }
        }
        >.backdiv h2{
            border-bottom-width: 1px;
            border-bottom-style: solid;
            border-bottom-color: ${({ theme }) => theme.COLORS.DARK_700};

            padding-bottom: 1.6rem;
            margin-bottom: 2.4rem;

            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            font-size: 4rem;
            font-weight: 500;

        }

        .imagediv{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;


            >img{
                width: clamp(20rem, 12.83rem + 18.868vw, 40rem);
                margin: 1.6rem 0;
            }
        }

        h2{
            text-align: center;
            font-size: clamp(2rem, 1.283rem + 1.887vw, 4rem);
            font-weight: 500;
            

        }

        p{
            text-align: center;
            font-size: clamp(1rem, 0.498rem + 1.321vw, 2.4rem);
            font-weight: 400;
            margin: 1.6rem 0;
        }

        ul{
            list-style: none;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1.6rem;

            margin: 1.6rem 0;

            flex-wrap: wrap;

            li{
                padding: 4px 8px;
                display: inline-flex;
                justify-content: center;
                align-items: center;
                gap: .8rem;
                border-radius: 5px;
                background-color: ${({ theme }) => theme.COLORS.DARK_1000};

                white-space: nowrap;
            }
        }

        .inputstepper{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            margin-top: 4.8rem;

            gap: 1.5rem;
            
            >svg{
                font-size: clamp(0.625rem, 0.401rem + 0.59vw, 1.25rem);
            }

            >button{
                
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
                font-size: .9rem;
                width: fit-content;
                height: 3.7rem;

                >svg{
                    font-size: 2.3rem;
                    margin-right: 0.5rem;
                }
            }
        }

        .input-stepper-child{
            display: flex;
            align-items: center;
            justify-content: center;

            gap: 1.5rem;

            >span{
                font-family: 'Roboto';
                font-size: 2rem;
                font-style: normal;
                font-weight: 700;

                
            }

        }
        .cursor-hability-pointer{
            cursor: pointer;
            width: 2.7rem;
            height: 2.7rem;

            &:hover{
                transform: scale(1.1);
                background-color: ${({ theme }) => theme.COLORS.LIGHT_700};
                border-radius: 50%;
            }
        }    
        
    

`

