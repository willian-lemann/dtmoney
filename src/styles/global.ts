import { theme } from "./theme";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}

html{
   @media(max-width: ${theme.breakpoints.lg}){
      font-size: 93.75%;
   }

   @media(max-width: ${theme.breakpoints.md}){
      font-size: 87.5%;
   }
}

body{
   background: ${theme.colors.background};
   -webkit-font-smoothing: antialiased;
}

body, input, textarea, button{
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong{
   font-weight: 600;
}

button{
   cursor: pointer;
}

[disabled]{
   opacity: 0.6;
   cursor: not-allowed;
}


.react-modal-overlay{
   background: rgba(0, 0 ,0 ,0.5);
   position: fixed;
   top: 0;
   bottom: 0;
   right: 0;
   left: 0;

   display: flex;
   align-items: center;
   justify-content: center;
}

.react-modal-content{
   background: ${({ theme }) => theme.colors.background};
   width: 100%;
   max-width: 576px;
   padding: 3rem;
   position: relative;
   border-radius: 0.24rem;
}
`;
