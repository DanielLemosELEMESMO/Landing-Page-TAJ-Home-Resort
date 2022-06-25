import React from "react";
import "./Atendimento.styles.css";
import Barrinha from "../../Barrinha/Barrinha";

const Atendimento = (props) => {
  return (
    <div className="bloco bloco-atendimento">
      <div className="subtitulo">
        <h2>ESTAMOS ANSIOSOS PARA MELHOR TE ATENDER!</h2>
        <Barrinha />
      </div>

      <div className="descricao_corretora">
        <p>
          Não perca a <span>oportunidade</span> de proporcionar a você e sua
          família essa <span>experiência única.</span>
          <br />
          <br />
          Venha visitar o Taj Home Resort e conhecer mais sobre esse{" "}
          <span>paraíso localizado em Vila Velha</span>, onde os seus{" "}
          <span>sonhos podem se tornar realidade.</span>
        </p>
      </div>

      <div className="imagem_corretora">
        <img
          src={require("../../Assets/Imagens/eleonor_apresentando_TAJ.jpg")}
          alt=""
        />
      </div>
    </div>
  );
};

export default Atendimento;
