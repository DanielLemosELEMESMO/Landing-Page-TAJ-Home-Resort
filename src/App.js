import React from "react";
import Cabecalho from "./Components/Blocos/Cabecalho/Cabecalho.js";
import Introducao from "./Components/Blocos/Introducao/Introducao.js";
import Torres from "./Components/Blocos/Torres/Torres.js";
import "./style.css";

export default function App() {
  return (
    <div className="main">
      <Cabecalho />
      <Introducao />
      <Torres />
    </div>
  );
}
