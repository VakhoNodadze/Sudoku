import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: ${props => props.theme.fontFamily.default};
    font-size: 14px !important;
    line-height: 1.5;
    margin: 0;
  }
  @media (max-width: 568px) {
    body{
      font-size: 8px !important;
    }
  }
  @media (max-width: 968px) {
    body{
      font-size: 12px !important;
    }
    
  }

  input, textarea {
    font-family: ${props => props.theme.fontFamily.default};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fontFamily.bold};
    margin: 2px 0;
    line-height: 1;
    font-weight: unset;
  }

  button {
    font-family: ${props => props.theme.fontFamily.bold};
    margin: 0;
    line-height: 1;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  small {
    line-height: 1;
  }

  ol {
    padding: 0 1.2rem;
  }

  img {
    vertical-align: middle;
  }


`

export default GlobalStyle
