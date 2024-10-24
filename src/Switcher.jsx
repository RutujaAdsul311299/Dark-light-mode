import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "./useDarkSide";

export default function Switcher() {
    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(colorTheme === "dark");

    const toggleDarkMode = (checked) => {
        setTheme(checked ? "dark" : "light"); // Set the theme based on the toggle state
        setDarkSide(checked);
    };

    return (
        <DarkModeSwitch
            style={{ marginBottom: "2rem" }}
            checked={darkSide}
            onChange={toggleDarkMode}
            size={30}
        />
    );
}
