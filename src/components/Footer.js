import React from 'react';
import { Image } from 'react-bootstrap';
import icon from '../img/icon.png';

export default function Footer() {
  return (
    <footer className='container py-5'>
      <div className='row'>
        <div className='col-12 col-md'>
          <Image
            alt='logo'
            style={{ height: '80px', width: '80px' }}
            src={icon}
          />
          <small className='d-block mb-3 text-muted'>© 2017–2021</small>
        </div>
        <div className='col-6 col-md'>
          <h5>Productos</h5>
          <ul className='list-unstyled text-small'>
            <li>
              <a href='https://buy.stripe.com/test_7sIbIYbY9fjXd9e145'>
                Sperm Frag
              </a>
            </li>
            <li>
              <a href='https://buy.stripe.com/test_dR628o2nz8Vz9X2eUW'>
                Sperm ROS
              </a>
            </li>
          </ul>
        </div>
        <div className='col-6 col-md'>
          <h5>Acerca de</h5>
          <ul className='list-unstyled text-small'>
            <li>Nosotros</li>
            <li>Contacto</li>
          </ul>
        </div>
        <div className='col-6 col-md'>
          <h5>Recursos</h5>
          <ul className='list-unstyled text-small'>
            <li>Instructivos</li>
            <li>Soporte</li>
          </ul>
        </div>

        <div className='col-6 col-md'></div>
        <div className='col-6 col-md'></div>
      </div>
    </footer>
  );
}
