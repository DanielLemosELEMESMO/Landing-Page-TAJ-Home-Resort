import React from "react";
import Botao from "../../Botao/Botao";
import "./Introducao.styles.css";

const Introducao = (props) => {
  return (
    <div className="bloco bloco-introducao">
      <div styles="width:100px !important">
        <img
          src="https://stackblitz.com/files/react-rgfmwx/github/DanielLemosELEMESMO/Landing-Page-TAJ-Home-Resort/master/src/Components/imagens/desktop_logo_grande.png"
          alt=""
        />
      </div>

      <div className="texto-principal">
        <p>
          <span>O luxuojo Taj Home Resort</span> que já está em construção{" "}
          <span>desafia o comum, te oferece o que é tão precioso na vida:</span>{" "}
          mais tempo para aproveitar o que <span>vale a pena.</span> Aqui,{" "}
          <span>cada segundo gasto é um segundo ganho.</span>
        </p>
      </div>

      <Botao
        title="MARQUE UMA VISITAÇÃO"
        className="button_outlined_yellow glow"
      />

      <div>
        <h3>VENHA CONHECER O PARAÍSO DAS ARÁBIAS, LOCALIZADO EM VILA VELHA</h3>
      </div>
    </div>
  );
};

export default Introducao;
