import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home, Users } from './pages'
import client from './utils/client'

import { ApolloProvider, gql } from '@apollo/client';


// import Users from './Users'
class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/profile" component={Profile} /> */}
            <Route exact path="/dashboard" component={Home} />
            {/* <Route exact path="/cattle" component={Cattle} /> */}
            <Route exact path="/user" component={Users} />
            {/* <Route exact path="/categories" component={Categories} /> */}
          </Switch>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}


export default App