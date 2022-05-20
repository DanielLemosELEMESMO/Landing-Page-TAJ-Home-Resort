import React from "react";
import Botao from "../../Botao/Botao";
import "./Introducao.styles.css";

const Introducao = (props) => {
  return (
    <div className="bloco introducao">
      <div styles="width:100px !important">
        <img
          src="https://stackblitz.com/files/react-rgfmwx/github/DanielLemosELEMESMO/Landing-Page-TAJ-Home-Resort/master/src/Components/imagens/desktop_logo_grande.png"
          alt=""
        />
      </div>
      <Botao
        title="MARQUE UMA VISITAÇÃO"
        className="button_outlined_yellow glow"
      />
    </div>
  );
};

export default Introducao;
