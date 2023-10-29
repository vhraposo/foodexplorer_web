import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
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

`
