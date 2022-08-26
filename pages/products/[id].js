import React from 'react';
import axios from 'axios'
import { useQuery } from 'react-query';
// import Loading from '../Common/Loading';
import { useRouter } from 'next/router';
import Loading from '../../components/Common/Loading';
import SpecificProduct from '../../components/Products/specific/SpecificProduct';
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
                        <SpecificProduct product={product} />

                }
            </div>
        </div>
    );
};

export default Index;