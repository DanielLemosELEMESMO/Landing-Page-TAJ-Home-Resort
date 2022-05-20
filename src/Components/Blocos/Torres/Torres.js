import React from "react";
import "./Torres.styles.css";

const torres = (props) => {
  return (
    <div className="bloco torres">
      <div className="flex-torres">
        <div className="T-A">
          <img
            className="torres-altas"
            src="https://stackblitz.com/files/react-behpjs/github/DanielLemosELEMESMO/Landing-Page-TAJ-Home-Resort/master/src/Components/imagens/3%201.png"
            alt="torre alta"
          />
          {/* torres-altas */}

          <div className="torre-oeste">
            <h3>TORRE OESTE</h3>
            <p>
              Com 158 metros e 50 pavimentos, a torre oeste é a maior do
              espírito santo. Possui subsolo, térreo, garagem, pilotis e 47
              andares com apartamentos de alto padrão. Nesta torre os
              apartamentos possuem 3 suítes e um acabamento de luxo.   A maior
              planta possui 176,41m².   Serão 3 vagas de estacionamento por
              unidade, podendo também adquirir uma quarta vaga.
            </p>
          </div>
          {/* torre-oeste */}
        </div>
        {/* T-A */}

        <div>
          <img
            className="torres-baixas"
            src="https://stackblitz.com/files/react-behpjs/github/DanielLemosELEMESMO/Landing-Page-TAJ-Home-Resort/master/src/Components/Imagens/Torres%201.png"
            alt="torre baixa"
          />
          <div className="torre-leste"></div>
        </div>
      </div>
      {/* flex-torres */}
    </div>
  );
};
export default torres;
