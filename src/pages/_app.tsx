import '@app/styles/globals.css';
import ApolloWrapper from '@app/wrappers/apollo-wrapper';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloWrapper>
      <Component {...pageProps} />
    </ApolloWrapper>
  );
}
