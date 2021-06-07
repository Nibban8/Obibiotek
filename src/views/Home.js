import './Home.css';

import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';
import { CreditCard2Back } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

export default function Home() {
  const productosRef = useRef(null);

  const handleProductos = () => {
    productosRef.current.scrollIntoView();
  };

  return (
    <div>
      {/* Seccion hero */}

      <div className='hero'>
        <div className='text'>
          {/* Confiables , Seguros , de calidad */}
          <h1 className=''>Kits de analisis de ADN</h1>
          <p>
            Entrega diasgnosticos confiables a tus clientes y ahorra en
            maquinaria cara
          </p>
          <div className='links'>
            <Button variant='light' className='wide-btn'>
              Nosotros
            </Button>
            <Button
              onClick={handleProductos}
              variant='light'
              className='wide-btn'
            >
              Productos
            </Button>
          </div>
        </div>
      </div>

      {/* Productos */}

      <div id='productos' ref={productosRef} className='productos'>
        <div className='producto'>
          <div className='img-container'>
            <div className='imagen frag'></div>
          </div>

          <div className='descripcion p-4'>
            <div className='heading'>
              <h2>Sperm Frag</h2>
            </div>
            <p>
              Kit de diagnóstico in vitro que permite medir la fragmentación del
              ADN de una manera rápida, sencilla y reproducible
            </p>
            <div className='links'>
              <Link to='/productos/frag'>
                <Button variant='dark' className='wide-btn'>
                  Ver mas
                </Button>
              </Link>
              <a href='https://buy.stripe.com/test_dR628o2nz8Vz9X2eUW'>
                <Button to='google.com' variant='dark' className='wide-btn'>
                  Comprar <CreditCard2Back />
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className='producto invertido'>
          <div className='img-container'>
            <div className='imagen ros'></div>
          </div>
          <div className='descripcion p-4'>
            <h2 className='heading'>Sperm ROS</h2>
            <p>
              Kit para deteccion exceso de aniones superóxido causados por
              leucocitos y espermatozoides anormales en el eyaculado
            </p>
            <div className='links'>
              <Link to='/productos/ros'>
                <Button variant='dark' className='wide-btn'>
                  Ver mas
                </Button>
              </Link>
              <a href='https://buy.stripe.com/test_7sIbIYbY9fjXd9e145'>
                <Button variant='dark' className='wide-btn'>
                  Comprar <CreditCard2Back />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
