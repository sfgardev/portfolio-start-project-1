import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
    // font-family: 'Josefin Sans', sans-serif;
    //font-family: 'Poppins', sans-serif;

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    body {
        margin: 0;
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.colors.font};
        line-height: 1.2;
        min-width: 22.5rem;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }

    a {
        text-decoration: none;
        color: ${theme.colors.font}
    }

    ul {
        list-style: none;
    }

    button {
        background-color: unset;
        border: none;
        cursor: pointer;
        color: ${theme.colors.font}
    }

    section {
        padding: 6.25rem 0;

        @media ${theme.media.mobile} {
            padding: 5rem 0;
        }
    }

    section:nth-of-type(odd) {
        background-color: ${theme.colors.primaryBg};
    }

    section:nth-of-type(even) {
        background-color: ${theme.colors.secondaryBg};
    }

    h3 {
        font-family: "Josefin Sans", sans-serif;
        font-size: 1rem;
        letter-spacing: 1px;
    }

    p {
        font-size: 0.875rem;
        line-height: 1.4;
    }
`;
