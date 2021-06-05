import React from 'react';
import { Button } from 'react-bootstrap';
import { CreditCard2Back } from 'react-bootstrap-icons';

export default function Producto() {
  return (
    <div className='productos'>
      <div className='producto'>
        <div className='imagen frag'></div>
        <div className='descripcion p-4'>
          <div className='heading'>
            <h2>Sperm Frag</h2>
          </div>
          <p>
            Kit de diagnóstico in vitro que permite medir la fragmentación del
            ADN de una manera rápida, sencilla y reproducible.
          </p>
          <div className='links'>
            <Button variant='dark' className='wide-btn'>
              Ver mas
            </Button>
            <Button variant='light' className='wide-btn'>
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
            leucocitos y espermatozoides anormales presentes en el eyaculado.
          </div>
          <div className='links'>🧬🔬🧪🧫🥼</div>
        </div>
      </div>
    </div>
  );
}
// ROS
// Kit para deteccion exceso de aniones superóxido causados por leucocitos y espermatozoides anormales presentes en el eyaculado.
