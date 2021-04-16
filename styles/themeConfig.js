import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#FFFFFF",
  text: "#363537",
  toggleBorder: "#FFF",
  background: "#363537",
  border: "#F4F7FB",
};

export const darkTheme = {
  body: "#000000",
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  background: "#999",
  border: "#20252B",
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
`;
