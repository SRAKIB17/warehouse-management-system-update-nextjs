import React from 'react';
import axios from 'axios'
import { useQuery } from 'react-query';
// import Loading from '../Common/Loading';
import { useRouter } from 'next/router';
import Loading from '../../components/Common/Loading';
import SpecificProduct from '../../components/Products/specific/SpecificProduct';
import SpecificDescription from '../../components/Products/specific/SpecificDescription';
const Index = () => {
    const router = useRouter()
    const { id } = router.query;
    const { data, isLoading } = useQuery(['buy', id], () => axios.get('/api/products/' + id))
    const product = data?.data

    return (
        <div>
            <div>
                {
                    isLoading ? <Loading />
                        :
                        <div className='m-4 md:mr-4  md:ml-4 xl:mr-40 xl:ml-40 '>
                            <div className='flex flex-col md:flex-row gap-10'>
                                <div className='w-[50%]'>
                                    <SpecificProduct product={product} />
                                </div>
                                <div className='w-[50%]'>
                                    <SpecificDescription product={product} />
                                </div>
                            </div>
                        </div>

                }
            </div>
        </div>
    );
};

export default Index;