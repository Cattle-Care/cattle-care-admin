import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Users from './Users'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/users" component={Users} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App