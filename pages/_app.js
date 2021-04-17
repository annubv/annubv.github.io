import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../styles/themeConfig";
import "../styles/reset.css";
import "../styles/global.css";
import "../styles/themeToggleButton.css";

const MyApp = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = (event) => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    event.stopPropagation();
    event.preventDefault();
  };

  return (
    <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Component
        {...pageProps}
        toggleTheme={toggleTheme}
        currentTheme={theme}
      />
    </ThemeProvider>
  );
};

export default MyApp;
