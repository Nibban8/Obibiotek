import React, { useState, useEffect } from 'react';
import { Container, Image, ListGroup, Button, Modal } from 'react-bootstrap';
import { CreditCard2Back, X } from 'react-bootstrap-icons';

import axios from 'axios';

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
    pdf,
    url_mx,
  } = producto;

  const [lgShow, setLgShow] = useState(false);
  const [buyLink, setbuyLink] = useState(url_mx);

  const getGeoInfo = () => {
    axios
      .get('https://ipapi.co/json/')
      .then((response) => {
        let data = response.data;
        data.country_code === 'MX' ? setbuyLink(url_mx) : setbuyLink(url);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getGeoInfo();
  });

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
            <a href={buyLink}>
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
            <Button
              onClick={() => setLgShow(true)}
              variant='light'
              className='wide-btn'
            >
              Instructivo
            </Button>
          </div>
        </Container>
      </div>
      <Modal
        size='lg'
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby='example-modal-sizes-title-lg'
      >
        <Modal.Header>
          <Modal.Title id='example-modal-sizes-title-lg'>
            Ficha Tecnica
          </Modal.Title>
          <Button onClick={() => setLgShow(false)} variant='outline-danger'>
            <X></X>
          </Button>
        </Modal.Header>
        <Modal.Body>
          <iframe
            title={nombre}
            src={pdf}
            width='100%'
            height='480'
            allow='autoplay'
          ></iframe>
        </Modal.Body>
      </Modal>
    </div>
  );
}
