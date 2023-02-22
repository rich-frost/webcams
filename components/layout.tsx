import { ReactNode } from 'react';
import Navbar from './navbar';
import { Flex } from '@chakra-ui/react';
import Head from 'next/head';

type LayoutProps = {
    children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <Flex padding={2} direction="column">
                <Navbar />
                <main>{children}</main>
            </Flex>
        </>
    );
}
