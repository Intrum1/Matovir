import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
<<<<<<< Updated upstream
=======
:root {
  --accentOrange: ${({ theme }) => theme.colors.accentOrange};
  --white: ${({ theme }) => theme.colors.white};
  --black: ${({ theme }) => theme.colors.black};
  --headerBg: ${({ theme }) => theme.colors.headerBg};
  --face: ${({ theme }) => theme.colors.face};
  --insta: ${({ theme }) => theme.colors.insta};
  --phone: ${({ theme }) => theme.colors.phone};
  --adress: ${({ theme }) => theme.colors.adress};
  --linearTransition: ${({ theme }) => theme.transitions.linear};
  
}

>>>>>>> Stashed changes
*,
*::before,
*::after {
  box-sizing: border-box;
}

 body {
  font-family: 'Neue Montreal', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.29;
  margin: 0;
  background-color: #fff;
  color: #000;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

a {
  color: currentColor;
  text-decoration: none;
}

button {
  font-family: inherit;
  border: none;
  cursor: pointer;
}


input {
  font-family: inherit;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

svg {
  fill: currentColor;
}
`;

export default GlobalStyles;
