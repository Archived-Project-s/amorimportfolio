import React from 'react';
import './App.css';
import Tela404 from './components/404/Index';
import TelaInicial from './components/TelaInicial/Index';
import GlitchTexto from './components/GlitchTexto/Index';

function App() {
  return (
    <div>
      <TelaInicial/>
      <Tela404/>
      <GlitchTexto/>
    </div>
  );
}

export default App;
