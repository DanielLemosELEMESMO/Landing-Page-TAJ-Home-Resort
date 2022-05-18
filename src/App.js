import React from 'react';
import Cabecalho from './Components/Blocos/Cabecalho.js';
import Introducao from './Components/Blocos/Introducao.js';
import './style.css';

export default function App() {
  return (
    <div>
      <Cabecalho/>
      <Introducao />
    </div>
  );
}
