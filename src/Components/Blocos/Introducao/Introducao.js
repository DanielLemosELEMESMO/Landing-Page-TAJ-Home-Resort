import React from "react";
import Botao from "../Botao/Botao.js";

const Introducao = (props) => {
  return (
    <div class="bloco">
      <div>
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
