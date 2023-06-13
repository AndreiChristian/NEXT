import { useTheme } from "@/context/ThemeContext";
import React from "react";

const Header = () => {
  const { darkMode, toggleTheme } = useTheme()!;

  return (
    <nav>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </nav>
  );
};

export default Header;
