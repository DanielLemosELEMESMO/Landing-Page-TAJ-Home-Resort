import React from 'react';
import Bloco from './Bloco';

const Cabecalho = (props) => {
  return (
    <div>
      <Bloco>
        <h1>Olá {props.name}</h1>
      </Bloco>
    </div>
  );
};

export default Cabecalho;
