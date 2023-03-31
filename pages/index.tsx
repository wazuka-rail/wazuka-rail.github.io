import React from 'react';
import Link from 'next/link';

const Index = () => {
    return (
        <>
            <h1 className="text-3xl font-bold underline">Welcome to Next.js!</h1>
            <Link href="/linkSample">link Sample Page</Link>
        </>
    );
};

export default Index;