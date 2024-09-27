import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    const [themeMode, setThemeMode] = useState("light");

    const toggleTheme = (mode) => {
        setThemeMode(mode);
        document.documentElement.className = mode;
    };

    return (
        <ThemeContext.Provider value={{ themeMode, darkTheme: () => toggleTheme("dark"), lightTheme: () => toggleTheme("light") }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default function useTheme() {
    return useContext(ThemeContext);
}
