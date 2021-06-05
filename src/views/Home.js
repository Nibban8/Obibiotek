import './Home.css';

import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';
import { CreditCard2Back } from 'react-bootstrap-icons';
import useScrollSnap from 'react-use-scroll-snap';

export default function Home() {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 50, delay: 0 });

  return (
    <div ref={scrollRef}>
      {/* Seccion hero */}

      <div className='hero'>
        <div className='text'>
          {/* Confiables , Seguros , de calidad */}
          <h1 className=''>Diagnosticos confiables</h1>
          <p>
            Entrega diasgnosticos confiables a tus clientes y ahorra en
            maquinaria cara
          </p>
          <div className='links'>
            <Button className='wide-btn'>Nosotros</Button>
            <Button className='wide-btn'>Productos</Button>
          </div>
        </div>
      </div>

      {/* Productos */}

      <div className='producto'>
        <div className='imagen frag'></div>
        <div className='descripcion p-4'>
          <div className='heading'>
            <h2>Sperm Frag</h2>
          </div>
          <p>
            Kit de diagnóstico in vitro que permite medir la fragmentación del
            ADN de una manera rápida, sencilla y reproducible
          </p>
          <div className='links'>
            <Button variant='dark' className='wide-btn'>
              Ver mas
            </Button>
            <Button variant='dark' className='wide-btn'>
              Comprar <CreditCard2Back />
            </Button>
          </div>
        </div>
      </div>
      <div className='producto'>
        <div className='imagen ros'></div>
        <div className='descripcion p-4'>
          <div className='heading'>Sperm ROS</div>
          <div>
            Kit para deteccion exceso de aniones superóxido causados por
            leucocitos y espermatozoides anormales en el eyaculado
          </div>
          <div className='links'>
            <Button variant='light' className='wide-btn'>
              Ver mas
            </Button>
            <Button variant='light' className='wide-btn'>
              Comprar <CreditCard2Back />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
