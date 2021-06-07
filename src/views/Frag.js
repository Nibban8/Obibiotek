import React from 'react';
import DNA from '../img/DNA.jpg';
import Producto from '../components/Producto';

export default function Frag() {
  const frag = {
    nombre: 'Sperm Frag',
    precio: 2300.0,
    imagen: DNA,
    contenido: [
      '12 x Laminillas pre-tratadas',
      '12 x Tubos Eppendorf® con gel de agarosa de bajo punto de fusión',
      'Botella con solucion de Lisis 120 ml',
      'Vial con solución ácida 2.0 ml',
    ],
    descripcion: 'Kit para diagnostico de fragmentación del ADN',
    funcionamiento:
      'Sperm Frag se basa en la técnica (SCD) Dispersión de la Cromatina Espermática, por sus siglas en ingles. Está fundamentada en un proceso controlado de desnaturalización del ADN, para facilitar la posterior eliminación de las proteínas que contiene cada espermatozoide. De esta forma, espermatozoides normales generan un halo formado por bucles de ADN en la cabeza del espermatozoide, que no está presente en aquellos que tienen su ADN dañado.',
    dosificacion: [
      'Se prepara la solución desnaturalizante HCL al 37%, aplicar por 7 minutos',
      'La solución de lisis se aplica por 5 minutos',
    ],
    url: 'https://buy.stripe.com/test_dR628o2nz8Vz9X2eUW',
  };

  return <Producto producto={frag} />;
}
