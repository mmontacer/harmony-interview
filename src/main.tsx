import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import About from "./Protected";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/protected" element={<About />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
