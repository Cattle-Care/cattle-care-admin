import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, Users, Login } from './pages';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/user" component={Users} />
    </Switch>
  </BrowserRouter>
);

export default App;
