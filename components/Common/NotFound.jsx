import { useRouter } from 'next/router';
import React from 'react';

const NotFound = () => {
    const router = useRouter()
    return (
        <div>
            <video autoPlay loop className='max-w-2xl w-full mx-auto'>
                <source src='/404.mp4' />
            </video>
            <button className='block mx-auto btn btn-primary ' onClick={()=>router.replace('/')}>
                Back Home
            </button>
        </div>
    );
};

export default NotFound;