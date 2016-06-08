import { configureGraphQLClient } from 'apollo-tools';

function createApolloClient(options) {
  if (!configureGraphQLClient) {
    const error = 'apollo-tools is missing. npm install --save apollo-tools';
    throw new Error(error);
  }

  const Client = configureGraphQLClient(options);
  return Client;
}

export default createApolloClient;
