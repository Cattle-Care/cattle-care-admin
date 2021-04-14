import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client/react';
import { Home, Users, Login, Profile, Cattle, Categories } from './pages';
import client from './utils/client';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = window.localStorage.getItem('token');

  return (
    <Route
      {...rest}
      render={props => {
        if (!isLoggedIn) {
          return <Redirect to="/login" />;
        }
        return <Component {...props} />;
      }}
    />
  );
};

const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/users" component={Users} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/cattle" component={Cattle} />
        <PrivateRoute exact path="/categories" component={Categories} />
      </Switch>
    </BrowserRouter>
  </ApolloProvider>
);

export default App;
