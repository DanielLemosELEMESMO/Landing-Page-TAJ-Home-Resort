import React from 'react';
import './torres.css';
const torres = (props) => {
  return (
    <div className="area-torres">
      <div className='flex-torres'>
        <img
        className='torres-altas'
          src="https://stackblitz.com/files/react-behpjs/github/DanielLemosELEMESMO/Landing-Page-TAJ-Home-Resort/master/src/Components/imagens/3%201.png"
          alt="torre alta"
        />
        {/* torres-altas */}
        
        <div className='torre-oeste'>
        <h3>TORRE OESTE</h3>
        <p>Com 158 metros e 50 pavimentos, a torre oeste é a maior do espírito santo.   Possui subsolo, térreo, garagem, pilotis e 47 andares com apartamentos de alto padrão. Nesta torre os apartamentos possuem 3 suítes e um acabamento de luxo.   A maior planta possui 176,41m².   Serão 3 vagas de estacionamento por unidade, podendo também adquirir uma quarta vaga.</p>
        </div>
        {/* torre-oeste */}
      </div>
      {/* flex-torres */}
    </div>
  );
};
export default torres;
