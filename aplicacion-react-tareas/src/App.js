import logo from './logo.svg';
import './App.css';
import TareaFormulario from './componentes/TareaFormulario';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <TareaFormulario/>
      </div>
    </div>
  );
}

export default App;
