import './App.css';
import logogithub from './imagenes/logo.png';
import Boton from './componentes/Boton.js';
import Contador from './componentes/Contador.js';
import { useState } from 'react';


function App() {
    const [numClics, setNumClics]=  useState(0);
    const manejarClic =  () =>{
      setNumClics(numClics+1);
    }
    const reiniciarContador =  () =>{
      setNumClics(0);
    }
  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img className='logo-github' src={logogithub} alt='logo de github'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics}/>
        <Boton texto='clic' esBotonDeClic={true} manejarClic={manejarClic}/>
        <Boton texto='reiniciar' esBotonDeClic={false} manejarClic={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
