import './Home.css';

import React from 'react';

import Productos from '../views/Productos';

export default function Home() {
  return (
    <div>
      {/* Seccion hero */}

      <div className='hero'>
        <div className='text'>
          {/* Confiables , Seguros , de calidad */}
          <h1 className=''>Kits de análisis de ADN</h1>
          <p>
            Entrega diagnósticos confiables a tus clientes y ahorra en
            maquinaria cara
          </p>

          <a href='#productos'>
            <span></span>Productos
          </a>
        </div>
      </div>

      {/* Productos */}

      <Productos id='productos'></Productos>
    </div>
  );
}
