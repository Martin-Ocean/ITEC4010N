import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import { seedDatabase } from "./utils/seedData";
import { ThemeProvider } from "@emotion/react";
import theme from "./components/Theme";
// Optional: Global styles
import "./index.css";

seedDatabase(); // Run only if needed

const root = createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <Router>
      <App />
    </Router>
  </ThemeProvider>
);
