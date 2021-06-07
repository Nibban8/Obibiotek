import React from 'react';
import Producto from '../components/Producto';

import ROS from '../img/ROS.jpg';

export default function Ros() {
  const ros = {
    nombre: 'Sperm ROS',
    precio: 800.0,
    imagen: ROS,
    contenido: [
      '12 x Laminillas pre-tratadas',
      '12 x Tubos Eppendorf® con gel de agarosa de bajo punto de fusión',
      'Botella con solucion de Lisis 120 ml',
      'Vial con solución ácida 2.0 ml',
    ],
    descripcion:
      'Kit para determinar el exceso de aniones superóxido causados por leucocitos y espermatozoides anormales',
    funcionamiento:
      'Se basa en la reacción del azul de nitrotetrazolio (NTB) el cual tiene la capacidad de solubilizar la sal nitrotetrazolio en agua para convertir la acción de los aniones superóxido reaccionando de manera colorimétrica en función de la concentración de éste.',
    dosificacion: [
      'Se coloca el reactivo de Sperm ROS® para estabilizarlo a temperatura ambiente (25°C) durante 1 hora.',
      'Usar una proporción de volumen 1:1 ósea 1 ml de Sperm ROS® en 1 ml de semen licuado',
    ],
    url: 'https://buy.stripe.com/test_7sIbIYbY9fjXd9e145',
  };

  return <Producto producto={ros} />;
}
