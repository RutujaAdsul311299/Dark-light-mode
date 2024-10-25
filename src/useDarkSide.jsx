import { useState, useEffect } from "react";

export default function useDarkSide() {
    const [theme, setTheme] = useState(localStorage.theme || "light");
    const colorTheme = theme === "light" ? "dark" : "light";

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);
        localStorage.theme = theme;
    }, [theme, colorTheme]);

    return [colorTheme, setTheme];
}