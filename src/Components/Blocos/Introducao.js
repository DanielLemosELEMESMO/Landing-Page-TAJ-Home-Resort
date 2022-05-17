import React from 'react';
import Bloco from './Bloco';

const Introducao = (props) => {
  return (
    <div>
      <Bloco>
        <h1>Olá {props.name}</h1>
      </Bloco>
    </div>
  );
};

export default Introducao;
