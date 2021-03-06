import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        min-height: 100%;
        background: #ccc;
    }

    *, button, input {
        border: 0;
        background: none;
        font-family: Arial, Helvetica, sans-serif
    }

    ul {
        list-style: none;
    }
`