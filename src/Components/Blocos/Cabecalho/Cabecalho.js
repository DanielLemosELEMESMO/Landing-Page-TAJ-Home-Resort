import React from "react";
import "./Cabecalho.css";
import logoPequena from "../../Imagens/desktop_logo_pequena.png";

const Cabecalho = (props) => {
  return (
    <div className="head">
      <img src={logoPequena} alt="TAJ HOME RESORT" />
    </div>
  );
};

export default Cabecalho;
