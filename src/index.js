import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Layout from './components/Layout'

import './index.css';



ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Layout} />
    </Switch>
  </BrowserRouter>
  ,
  document.getElementById('root')
);


