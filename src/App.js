import './App.css';

import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './views/Home';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Frag from './views/Frag';

function App() {
  return (
    <div>
      <Navigation />
      <Router>
        <Switch>
          <Route path='/productos/frag' exact component={() => <Frag />} />
          <Route path='/' exact component={() => <Home />} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
