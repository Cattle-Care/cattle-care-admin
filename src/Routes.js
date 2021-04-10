import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, Users, Login, Profile,Cattle,Categories } from './pages';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/users" component={Users} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/cattle" component={Cattle} />
      <Route exact path="/categories" component={Categories} />
    </Switch>
  </BrowserRouter>
);

export default App;
