import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scrollbar-color:${({ theme }) => `${theme.color.primary} ${theme.color.shadow}`};
    scrollbar-width: thin;
  }

  ::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }
  
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.color.shadow};
    -webkit-border-radius: 7px;
    -moz-border-radius: 7px;
    border-radius: 7px;
  }
  
  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 7px;
    -moz-border-radius: 7px;
    border-radius: 7px;
    background: ${({ theme }) => theme.color.primary};
  }
  
  ::-webkit-scrollbar-corner {
    background: ${({ theme }) => theme.color.white};
  }

  html {
    font-size: 62.5%;
  }
  
  body {
    margin: 0;
    font-size: 1.4rem;
    font-family: ${({ theme }) => theme.font.primary};
    background-color: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.text};
    -webkit-backface-visibility: hidden;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
  }
  
  h1{
    margin: 0;
    font-family: ${({ theme }) => theme.font.secondary};
    font-size: 3.2rem;
    font-weight: ${({ theme }) => theme.font.semiBold};
  }
  
  h2{
    margin: 0;
    font-family: ${({ theme }) =>theme.font.secondary};
    font-size: 2.9rem;
    font-weight: ${({ theme }) => theme.font.semiBold};
  }
  
  h3{
    margin: 0;
    font-family: ${({ theme }) =>theme.font.secondary};
    font-size: 2.4rem;
    font-weight: ${({ theme }) => theme.font.semiBold};
  }
  
  h4{
    margin: 0;
    font-family: ${({ theme }) =>theme.font.secondary};
    font-size: 2rem;
    font-weight: ${({ theme }) => theme.font.semiBold};
  }
  
  h5{
    margin: 0;
    font-family: ${({ theme }) => theme.font.secondary};
    font-size: 1.8rem;
    font-weight: ${({ theme }) => theme.font.semiBold};
  }
  
  h6{
    margin: 0;
    font-family: ${({ theme }) => theme.font.secondary};
    font-size: 1.6rem;
    font-weight: ${({ theme }) => theme.font.semiBold};
  }
  
  button{
    -webkit-backface-visibility: hidden;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
    -webkit-transform: scale(1);
  }
`;

export default GlobalStyle;
