import { AppProps } from 'next/app';
import Head from 'next/head';

import "../styles/index.css";

const App = ({ Component, pageProps }: AppProps) => (
    <>
        <Head>
            <title />
        </Head>
        <Component {...pageProps} />
    </>
);

export default App;
