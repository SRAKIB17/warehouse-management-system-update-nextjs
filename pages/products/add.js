/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import AddItem from '../../components/Products/manages/AddItem';
import auth from '../../firebase.init';

const Index = () => {
    const [user, loading, error] = useAuthState(auth);


    return (
        <div className='m-4 sm:ml-10 sm:mr-10 md:mr-20  md:ml-20 xl:mr-28 xl:ml-28'>
            <div className='flex gap-3 lg:flex-row flex-col lg:items-center '>
                <div className=' w-full lg:w-[50%] '>
                    <img src="/icon/product/Add files-amico.svg" alt="" className="max-w-sm mx-auto md:max-w-md lg:max-w-full w-full" />
                </div>
                <div className='w-full lg:w-[50%] mt-7'>
                    <AddItem />
                </div>
            </div>
        </div>
    );
};

export default Index;