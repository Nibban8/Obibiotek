import React from 'react';

export default function Success() {
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
          <i className='checkmark'>✓</i>
        </div>
        <h1>Compra exitosa </h1>
        <p>Gracias por tu compra, nos pondremos en contacto en breve</p>
      </div>
    </div>
  );
}
