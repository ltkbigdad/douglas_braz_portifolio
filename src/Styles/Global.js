import { createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        list-style-type: none;
        box-sizing: border-box;
        text-decoration: none;
    }

    body {
        font-family: 'Inter', sans-serif;
        background-color: var(--purple-800);      
    }

    button, a {
        :hover {
            cursor: pointer;
        }
    }

    :root {
        
        --purple-200: #a40ee4;
        --purple-300: #8257e6;
        --purple-800: #13131f;

        --white: #f9f9f9;

        --grey-500: #82807f;
        --grey-800: #212121;
    }


`;

export default Global;