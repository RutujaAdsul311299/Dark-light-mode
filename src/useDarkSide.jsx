import { useState, useEffect } from "react";

export default function useDarkSide() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light"); // Default to light mode
    const colorTheme = theme === "dark" ? "light" : "dark";

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);

        // Save the theme to localStorage
        localStorage.setItem("theme", theme);
    }, [theme, colorTheme]);

    return [colorTheme, setTheme];
}
