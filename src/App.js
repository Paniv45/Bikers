import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Contact from './components/Contact';
import About from './components/About';
import Main from './components/Main';
import Product from './components/Product';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Rating from './components/Rating';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/Nav" component={Nav} />
        <Route path="/Product" component={Product} />
        <Route path="/Footer" component={Footer} />
        <Route path="/Rating" component={Rating} />
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
}



export default App;