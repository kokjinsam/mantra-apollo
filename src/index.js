import createApolloClient from './createApolloClient';

function apolloMiddleware(options = {}) {
  const {
    clientName = 'Client',
    ...others,
  } = options;

  return {
    moduleWillInit() {
      const apolloClient = createApolloClient(others);

      this.context[clientName] = apolloClient;
      this._apolloReducer = apolloClient.reducer();
      this._apolloMiddleware = apolloClient.middleware();
    },
  };
}

export default apolloMiddleware;
