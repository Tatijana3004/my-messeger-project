import React from "react";

// export const ThemeContext = React.createContext("dark");

export const ThemeContext = React.createContext({
    theme: "",
    changeTheme: () => {
    },
});