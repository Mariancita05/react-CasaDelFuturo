import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import "../src/views/App";
import Layout from "./Layout";
import searchCharacter from "./views/searchCharacter";
import { CardCharacter } from "./components/CardCharacter";
import App from "../src/views/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="characters/:idCharacter" element={<CardCharacter />} />
          <Route path="search" element={<searchCharacter />} />
        </Route>
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
