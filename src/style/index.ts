

import { createGlobalStyle } from 'styled-components';
import Fundo from '../assets/Github.svg';

export default createGlobalStyle`

   

    body{
        width: 980px;
        margin: 0 auto;
        background-color: #f0f0f5;
        font-family: Roboto, sans-serif;
    }

    .fundo{
        background-image: url(${ Fundo });
        background-repeat: no-repeat;
        background-size: contain;
        background-position: 70%,10px;
    }
    
    *{
        margin: 0px;
        padding: 0px;
        outline: 0px;
        box-sizing: border-box;
    }

    a{
        text-decoration: none;
        color: #A8A8B3;
        font-weight: bold;
    }

    button{
        cursor: pointer;
    }

`;