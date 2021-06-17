import React from 'react';

import { ExclamationLg } from 'react-bootstrap-icons';

export default function Failure() {
  return (
    <div className='card-container'>
      <div className='card'>
        <div
          style={{
            borderRadius: '200px',
            height: '200px',
            width: '200px',
            background: '#F8FAF5',
            margin: '0 auto',
          }}
        >
          <i style={{ margin: 0, color: '#ffc107' }} className='checkmark'>
            <ExclamationLg />
          </i>
        </div>
        <h1 style={{ color: '#ffc107' }}>Ocurrio un problema</h1>
        <p>Su pago no pudo ser procesado.</p>
      </div>
    </div>
  );
}
