import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import User from '../components/User';
import Home from './Home';
import Profile from "../components/Profile";
import Cattle from "../components/Cattle";
// import Users from './Users'
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
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