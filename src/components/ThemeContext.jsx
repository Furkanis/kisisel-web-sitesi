import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isLightMode, setIsLightMode] = useState(false);
  const [sideColor, setSideColor] = useState("bg-gray-800"); // Home sayfasının sol %25'lik alanı

  return (
    <ThemeContext.Provider value={{ isLightMode, setIsLightMode, sideColor, setSideColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
