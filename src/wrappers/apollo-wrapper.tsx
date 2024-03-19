import { ApolloClient, ApolloLink, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';

const ApolloWrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  const httpLink = new HttpLink({
    uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  });

  const client = new ApolloClient({
    link: ApolloLink.from([httpLink]),
    connectToDevTools: true,
    cache: new InMemoryCache({
      addTypename: false,
    }),
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloWrapper;
