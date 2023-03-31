import React from 'react';
import Link from 'next/link';

const Index = () => {
    return (
        <>
            <div>Welcome to Next.js!</div>
            <Link href="/linkSample">link Sample Page</Link>
        </>
    );
};

export default Index;