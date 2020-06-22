import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from "./App";
import Teste from "./Teste";

const Router = () =>(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/teste" component={Teste}/>
      <Route component={App}/>
    </Switch>
  </BrowserRouter>
);

export default Router;