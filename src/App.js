import React from "react";
import Cabecalho from "./Components/Blocos/Cabecalho/Cabecalho";
import Introducao from "./Components/Blocos/Introducao/Introducao";
import VideoIntrodutorio from "./Components/Blocos/VideoIntrodutorio/videoIntrodutorio";
import InteriorDoApto from "./Components/Blocos/InteriorDoApto/InteriorDoApto";
import Torres from "./Components/Blocos/Torres/Torres.js";
import "./style.css";

export default function App() {
  return (
    <div className="main">
      {/* <Cabecalho /> */}
      <Introducao />
      <VideoIntrodutorio />
      <InteriorDoApto />
      {/* <Torres /> */}
    </div>
  );
}
