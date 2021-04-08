import { ApolloClient, InMemoryCache, createHttpLink, setContext } from '@apollo/client';

import config from './config';

const httpLink = createHttpLink({
  uri: config.graphQlUri,
});

const authLink = setContext(async (_, { headers }) => {
  const token = await window.localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token || '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
