import Head from 'next/head';
import React from 'react';
import Products from '../../components/Products/Products';

const Index = () => {
    return (
        <div>
            <Head>
                <title>Fresh Grocries WMS</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Products />
        </div>
    );
};

export default Index;