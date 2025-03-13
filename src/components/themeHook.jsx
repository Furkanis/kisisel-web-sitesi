import { useContext } from "react";
import ThemeContext from "../components/ThemeContext";

function useTheme() {
  return useContext(ThemeContext);
}

export default useTheme;
