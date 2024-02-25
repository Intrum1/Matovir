import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root {
  --accentOrange: ${({ theme }) => theme.colors.accentOrange};
  --white: ${({ theme }) => theme.colors.white};
  --black: ${({ theme }) => theme.colors.black};
  --headerBg: ${({ theme }) => theme.colors.headerBg};
  --backdrop: ${({ theme }) => theme.colors.backdrop};
  --linearTransition: ${({ theme }) => theme.transitions.linear};
  --face: ${({ theme }) => theme.colors.face};
  --insta: ${({ theme }) => theme.colors.insta};
  --phone: ${({ theme }) => theme.colors.phone};
  --adress: ${({ theme }) => theme.colors.adress};
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

 body {
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.29;
  margin: 0;
  background-color: var(--white);
  color: var(--black);
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
  padding: 0;
  background-color: transparent;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
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
