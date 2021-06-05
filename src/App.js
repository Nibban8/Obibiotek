import './App.css';

import { Button } from 'react-bootstrap';

import Navigation from './components/Navigation';
import Producto from './components/Producto';

function App() {
  return (
    <div>
      {/* Barra de navegacion */}

      <Navigation />

      {/* Seccion hero */}

      <div className='hero'>
        <div className='text'>
          {/* Confiables , Seguros , de calidad */}
          <h1 className=''>Diagnosticos confiables</h1>
          <p>Sin necesidad maquinaria cara y compleja </p>
          <p>
            <Button size='lg'>Nosotros</Button>
            <Button size='lg'>Productos</Button>
          </p>
        </div>
      </div>

      {/* Productos */}

      <Producto />
    </div>
  );
}

export default App;
