import './App.css';

import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';
import { CreditCard2Back } from 'react-bootstrap-icons';
import useScrollSnap from 'react-use-scroll-snap';

import Navigation from './components/Navigation';
import Home from './views/Home';

function App() {
  return (
    <div>
      <Navigation />
      <Home />
    </div>
  );
}

export default App;
