import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#FFFFFF",
  text: {
    primary: "#363537",
    secondary: "#FAFAFA",
  },
  border: {
    primary: "#F4F7FB",
  },
  button: {
    primary: "#000000",
  },
};

export const darkTheme = {
  body: "#000000",
  text: {
    primary: "#FAFAFA",
    secondary: "#363537",
  },
  border: {
    primary: "#20252B",
  },
  button: {
    primary: "#FFFFFF",
  },
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text.primary};
  }
`;
