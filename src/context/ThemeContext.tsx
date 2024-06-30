"use client";
import React from "react";

interface ThemeContextValue {
  setTheme: (theme: string) => void;
  logoUrl: string;
  aboutUrl: string;
  aboutUrlSmall: string;
}

const DARK_THEME_CONTEXT_VALUE: ThemeContextValue = {
  setTheme: () => {},
  logoUrl: "/images/logo_N.jpg",
  aboutUrl: "/images/Nitin.jpg",
  aboutUrlSmall: "/images/Nitin.jpg",
};

const LIGHT_THEME_CONTEXT_VALUE: ThemeContextValue = {
  setTheme: () => {},
  logoUrl: "/images/logo_N.jpg",
  aboutUrl: "/images/Nitin.jpg",
  aboutUrlSmall: "/images/Nitin.jpg",
};

const ThemeContext = React.createContext<ThemeContextValue>(
  DARK_THEME_CONTEXT_VALUE
);

interface Props extends React.PropsWithChildren<{}> {
  initialTheme: string;
}

const ThemeProvider = ({ initialTheme, children }: Props) => {
  const [selectedTheme, setSelectedTheme] = React.useState(initialTheme);

  const value =
    selectedTheme === "light"
      ? LIGHT_THEME_CONTEXT_VALUE
      : DARK_THEME_CONTEXT_VALUE;

  return (
    <ThemeContext.Provider value={{ ...value, setTheme: setSelectedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => React.useContext(ThemeContext);

export { ThemeProvider, useTheme };