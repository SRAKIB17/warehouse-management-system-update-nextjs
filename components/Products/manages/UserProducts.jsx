import { useRouter } from 'next/router';
import React, { useState } from 'react';
import axios from 'axios'
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const UserProducts = () => {
    const router = useRouter()
    const { page, showP, search } = router?.query || ' '
    const [getPage, setPage] = useState(1);
    const [show, setShow] = useState(8);
    const [lastPage, setLastPage] = useState(2);

    const [user, loading, error] = useAuthState(auth);

    const { data, isLoading } = useQuery(['userProducts', user, search, show, getPage], () => axios.get(`/api/products/manages-products?email=${user?.email}&search=${search}&show=${show}&page=${getPage}&user_id=${user?.uid}`))
    const count = data?.data?.count
    const products = data?.data?.result


    console.log(products)



    return (
        <div>

        </div>
    );
};

export default UserProducts;