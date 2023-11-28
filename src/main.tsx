import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "normalize.css";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        background: {
            paper: "#f7d75e",
        },
    },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
