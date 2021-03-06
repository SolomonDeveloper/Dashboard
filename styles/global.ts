import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --whiteDarker: rgb(255, 255, 255, 59%);
    --whiteDark: rgb(255, 255, 255, 85%);
    --white: #FFFFFF;

    --grayLight: rgba(74, 74, 74, 0.41);

    --darkBlack: #121214;
    --black: #000;
    --lightBlack: #202024;
    --lighterBlack: rgba(41, 41, 46, 1);

    --purple: #8257E5;
  }

  body {
    -webkit-font-smoothing: antialiased;
}

  html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 700;
        font-family: 'Roboto', sans-serif;
    }
    p, span, a {
      font-family: 'Open Sans', sans-serif;
    }

    button {
      color: var(--whiteDarker);
      background: none;
      border: none;
      border-radius: 20px;
      cursor: pointer;
    }

    input {
      border-radius: 10px;
      border: none;
      padding: 1rem 1rem;
      color: var(--white);
      transition: 0.4s border;
      border: 1px solid var(--darkBlack);

      &:focus-within {
       border: 1px solid var(--purple);
  }
    }

    a {
      text-decoration: none;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    //global classNames

    .rounded-full {
      border-radius: 50%;
    }

    .dWPcrn .ant-select-single.ant-select-lg:not(.ant-select-customize-input) .ant-select-selector {
      height: 55px;
    }

    .ant-select-selection-placeholder {
      display: flex;
      align-items: center;
    }
    .ant-select-selection-item {
      display: flex;
      align-items: center;
    }
`;
