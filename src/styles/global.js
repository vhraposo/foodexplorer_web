import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        --sb-track-color: #2f3538;
        --sb-thumb-color: #111c73;
        --sb-size: 8px;

        scrollbar-color: var(--sb-thumb-color) 
                        var(--sb-track-color);
    }

    :root{
        font-size: 62.5%;

        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    body{
        background-color: ${({ theme }) => theme.COLORS.DARK_400};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        -webkit-font-smoothing: antialiased;

        height: 100vh;
        
    }

    a{
        text-decoration: none;
    }

    button, a{
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover{
        filter: brightness(0.9);
    }

    button{
        cursor: pointer;
        background-color:  ${({ theme }) => theme.COLORS.RED_100};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

    }

    input, text-area{
        border: none;
    }

    ul, li{
        text-decoration: none;
        list-style: none;
    }

    input{
        outline: none;
    }


    *::-webkit-scrollbar {
    width: var(--sb-size) 
    }

    *::-webkit-scrollbar-track {
    background: var(--sb-track-color);
    border-radius: 25px;
    }

    *::-webkit-scrollbar-thumb {
    background: var(--sb-thumb-color);
    border-radius: 25px;
    
    }
`
