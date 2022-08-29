import React, { useState } from 'react';
import axios from 'axios'
import { useQuery } from 'react-query';
// import Loading from '../Common/Loading';
import { useRouter } from 'next/router';

import SpecificProduct from '../../../components/Products/specific/SpecificProduct';
import ManageSpecificDescription from '../../../components/Products/specific/ManageItem';
import Loading from '../../../components/Common/Loading';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import EditProductModal from '../../../components/Products/manages/EditProductModal';
const Index = () => {
    const router = useRouter()
    const { id } = router.query;
    const { data, isLoading, refetch } = useQuery(['buy', id], () => axios.get('/api/products/' + id))
    const product = data?.data

    const [editProduct, setEditProduct] = useState(null)

    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        return <Loading />
    }
    if (!user) {
        router.replace('/login/?return_url=/products/inventory/' + id)
    }

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
                                    <ManageSpecificDescription product={product} refetch={refetch} setEditProduct={setEditProduct}/>
                                </div>
                            </div>
                        </div>

                }
            </div>
            {
                editProduct &&
                <EditProductModal
                    editProduct={editProduct}
                    setEditProduct={setEditProduct}
                    refetch={refetch}
                />
            }
        </div>
    );
};

export default Index;