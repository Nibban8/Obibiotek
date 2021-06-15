import './Home.css';

import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
          <div className='links'>
            <Link className='wide-btn' to='/nosotros'>
              <Button variant='light' className='wide-btn'>
                Nosotros
              </Button>
            </Link>

            <Link className='wide-btn' to='/productos'>
              <Button variant='light' className='wide-btn'>
                Productos
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Productos */}

      <Productos />
    </div>
  );
}
