import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import User from '../components/User';
import Home from './Home';
import Dashboard from "../components/Dashboard";
import Cattle from "../components/Cattle";
// import Users from './Users'
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dashboard" component={Home} />
            <Route exact path="/cattle" component={Cattle} />
            <Route exact path="/user" component={User} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}


export default App