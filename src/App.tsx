import React from 'react';
// import s from './App.module.scss';
import Header from './components/Header/index.js';
import Footer from './components/Footer/index.js';
import HomePage from './pages/Home/index'
import ErrorPage from './pages/Error'
import PokedexPage from './pages/Pokedex'

import {BrowserRouter, Redirect, Route} from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/home" component={HomePage}/>
        <Route path="/Pokedex" component={PokedexPage}/>
        <Route path="/Legendaries" component={HomePage}/>
        <Route path="/Documentation" component={HomePage}/>

        <Route component={ErrorPage}/>
      </Switch>
    </BrowserRouter>
  )
};

export default App;
