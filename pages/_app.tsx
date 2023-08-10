import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import Layout from '../components/layout';
import type { AppProps } from 'next/app';
import theme from '../libs/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}
