import './App.css';

import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './views/Home';
import Footer from './components/Footer';

import Frag from './views/Frag';
import Ros from './views/Ros';

import Success from './views/Success';
import Failure from './views/Failure';

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route path='/success' exact component={() => <Success />} />
          <Route path='/failure' exact component={() => <Failure />} />
          <Route path='/productos/frag' exact component={() => <Frag />} />
          <Route path='/productos/ros' exact component={() => <Ros />} />
          <Route path='/' exact component={() => <Home />} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
