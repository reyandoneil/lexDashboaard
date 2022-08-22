import { createGlobalStyle } from 'styled-components';

const GlobalSyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        overscroll-behavior: none;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #F4F5F7;
    }
`;

export default GlobalSyle;
