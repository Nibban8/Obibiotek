import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';
import { CreditCard2Back } from 'react-bootstrap-icons';
import useScrollSnap from 'react-use-scroll-snap';

export default function Producto() {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });

  return <div ref={scrollRef} className='productos'></div>;
}
// ROS
// Kit para deteccion exceso de aniones superóxido causados por leucocitos y espermatozoides anormales presentes en el eyaculado.
