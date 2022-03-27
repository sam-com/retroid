import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider as ReduxProvider } from "react-redux";

import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";

const darkTheme = createTheme({
  typography: {
    fontFamily: "lato",
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#37B6FF",
    },
    secondary: {
      main: "#80cb2b",
    },
    info: {
      main: "#D9D9D8",
    },
    warning: {
      main: "#ffde5a",
    },
    success: {
      main: "#80cb2b",
    },
    error: {
      main: "#eb1d29",
    },
    text: {
      primary: "#D9D9D8",
    },
    background: {
      default: "#1e3c65",
      paper: "#1e1e1e",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <ThemeProvider theme={darkTheme}>
        <ReduxProvider store={store}>
          <App />
        </ReduxProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
