import React from "react";
import Cabecalho from "./Components/Blocos/Cabecalho/Cabecalho";
import Introducao from "./Components/Blocos/Introducao/Introducao";
import VideoIntrodutorio from "./Components/Blocos/VideoIntrodutorio/videoIntrodutorio";
// import InteriorDoApto from "./Components/Blocos/InteriorDoApto/InteriorDoApto";
import Torres from "./Components/Blocos/Torres/Torres.js";
import Bem from "./Components/Blocos/Bem-Estar/Bem.js";
import Formulario from "./Components/Blocos/Formulario/Formulario.js";
import Oportunidade from "./Components/Blocos/Oportunidade/Oportunidade.js";
import Plantas from "./Components/Blocos/Plantas/Plantas.js";
import Atendimento from "./Components/Blocos/Atendimento/Atendimento.js";
// import Rodape from './Components/Blocos/Rodape/Rodape.js'; // ainda virá o roda pe
import "./style.css";

export default function App() {
  return (
    <div className="main">
      <Cabecalho />
      <Introducao />
      <VideoIntrodutorio />
      {/* <InteriorDoApto /> */}
      <Torres />
      <Atendimento />
      <Bem />
      <Formulario />
      <Oportunidade />
      <Plantas />
      {/* <Rodape /> */}
    </div>
  );
}
