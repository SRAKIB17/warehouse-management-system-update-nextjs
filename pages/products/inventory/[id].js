import React from 'react';
import axios from 'axios'
import { useQuery } from 'react-query';
// import Loading from '../Common/Loading';
import { useRouter } from 'next/router';

import SpecificProduct from '../../../components/Products/specific/SpecificProduct';
import ManageSpecificDescription from '../../../components/Products/specific/ManageItem';
import Loading from '../../../components/Common/Loading';
const Index = () => {
    const router = useRouter()
    const { id } = router.query;
    const { data, isLoading } = useQuery(['buy', id], () => axios.get('/api/products/' + id))
    const product = data?.data

    return (
        <div>
            <div>
                {
                    isLoading ?
                        <Loading />
                        :
                        <div className='m-4 md:mr-4  md:ml-4 xl:mr-40 xl:ml-40 '>
                            <div className='flex flex-col md:flex-row md:gap-10 gap-2'>
                                <div className='w-full p-4 md:w-[50%]'>
                                    <SpecificProduct product={product} />
                                </div>
                                <div className='w-full md:w-[50%]'>
                                    <ManageSpecificDescription product={product} />
                                </div>
                            </div>
                        </div>

                }
            </div>
        </div>
    );
};

export default Index;