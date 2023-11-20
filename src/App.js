import React from "react";
import Home from "./components/home";
import Login from "./components/Login";
import Reprodutor from "./components/Vista curso/reprodutor";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Reproductor/:itemSerializado" element={<Reprodutor />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
