import React from 'react';
import { Image } from 'react-bootstrap';
import icon from '../img/icon.png';

export default function Footer() {
  return (
    <footer class='container py-5'>
      <div class='row'>
        <div class='col-12 col-md'>
          <Image
            alt='logo'
            style={{ height: '50px', width: '50px' }}
            src={icon}
          />
          <small class='d-block mb-3 text-muted'>© 2017–2021</small>
        </div>
        <div class='col-6 col-md'>
          <h5>Productos</h5>
          <ul class='list-unstyled text-small'>
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
        <div class='col-6 col-md'>
          <h5>Acerca de</h5>
          <ul class='list-unstyled text-small'>
            <li>
              <a>Nosotros</a>
            </li>
            <li>
              <a>Contacto</a>
            </li>
          </ul>
        </div>
        <div class='col-6 col-md'>
          <h5>Recursos</h5>
          <ul class='list-unstyled text-small'>
            <li>
              <a>Instructivos</a>
            </li>
            <li>
              <a>Soporte</a>
            </li>
          </ul>
        </div>

        <div class='col-6 col-md'></div>
        <div class='col-6 col-md'></div>
      </div>
    </footer>
  );
}
