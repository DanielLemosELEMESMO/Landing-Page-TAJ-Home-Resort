import React from "react";
import Cabecalho from "./Components/Blocos/Cabecalho/Cabecalho";
import Introducao from "./Components/Blocos/Introducao/Introducao";
import Torres from "./Components/Blocos/Torres/Torres.js";
import Bem from "./Components/Blocos/Bem-Estar/Bem.js";
import Formulario from "./Components/Blocos/Formulario/Formulario.js";
import Oportunidade from './Components/Blocos/Oportunidade/Oportunidade.js'
import "./style.css";

export default function App() {
  return (
    <div className="main">
      <Cabecalho />
      {/* <Introducao /> */}
      <Torres />
      <Bem />
      <Formulario/>
      <Oportunidade/>
    </div>
  );
}
