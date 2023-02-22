import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/layout';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ChakraProvider>
    );
}
