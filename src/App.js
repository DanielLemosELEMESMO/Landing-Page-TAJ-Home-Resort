import React from 'react';
import Cabecalho from './Components/Cabecalho.js';
import Introducao from './Components/Introducao.js';
import Torres from './Components/Torres.js';
import './style.css';

export default function App() {
  return (
    <div className="main">
      <Cabecalho />
      <Torres />
      <Introducao />
    </div>
  );
}
