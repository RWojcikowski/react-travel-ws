import React from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route patch='/' exact component={Home} />
          <Route patch='/services' exact component={Services} />
          <Route patch='/products' exact component={Products} />
          <Route patch='/sign-up' exact component={SignUp} />
        </Switch>
      </Router>
    </>

  );
}

export default App;
