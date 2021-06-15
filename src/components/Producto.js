import React from 'react';
import { Container, Image, ListGroup, Button } from 'react-bootstrap';
import { CreditCard2Back } from 'react-bootstrap-icons';
import './producto.css';

export default function Producto({ producto }) {
  const {
    nombre,
    precio,
    imagen,
    contenido,
    descripcion,
    funcionamiento,
    dosificacion,
    url,
  } = producto;

  return (
    <div>
      <Container className='primero'>
        <div style={{ alignSelf: 'center' }} className='imagen'>
          <Image src={imagen} fluid />
        </div>
        <div className='info'>
          <h1 className='nombre'>{nombre}</h1>
          <div className='desc'>{descripcion}</div>
          <div
            style={{ textTransform: 'lowercase' }}
            className='precio '
          >{`$ ${parseFloat(precio).toFixed(2)} DLL`}</div>

          <div className='comprar mb-4'>
            <a href={url}>
              <Button variant='dark' className='wide-btn'>
                Comprar <CreditCard2Back />
              </Button>
            </a>
          </div>
          <div className='contenido'>
            <span>Contenido:</span>
            <ListGroup className='mt-3' variant='flush'>
              {contenido.map((item) => (
                <ListGroup.Item variant='success'>{item}</ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </div>
      </Container>
      <div className='segundo mt-4 '>
        <Container>
          <div className='func'>
            <h2>Funcionamiento</h2> {funcionamiento}
          </div>

          <div className='uso'>
            <h2>Dosificación</h2>
            <ul>
              {dosificacion.map((step) => (
                <li>{step}</li>
              ))}
            </ul>
            <Button variant='light' className='wide-btn'>
              Instructivo
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
}
