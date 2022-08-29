import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../../components/Common/Loading';
import Search_s from '../../../components/LogoSvg/Search_s';
import UserProducts from '../../../components/Products/manages/UserProducts';
import auth from '../../../firebase.init';

const Index = () => {
    const router = useRouter();
    const { search } = router.query;
    const [searchValue, setSearchValue] = useState({})
    useEffect(() => {
        search ? setSearchValue({search}) : setSearchValue({})
    }, [router])

    const checkSearchHandle = (e) => {
        setSearchValue({})
    }
    const searchProductHandle = e => {
        e.preventDefault()
        router.replace('?search=' + e.target.search.value)
    }

       
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        return <Loading />
    }
    if (!user) {
        router.replace('/login/?return_url=/products/manage')
    }
    return (
        <div className='m-4 md:mr-4  md:ml-4 xl:mr-28 xl:ml-28'>
            <div className='pt-10'>
                <div>
                    <h1 className='text-primary text-3xl font-extrabold text-center mb-4'>Manage Product</h1>
                </div>
                <form onSubmit={searchProductHandle} className='flex items-center'>
                    <input
                        type="search"
                        className='input max-w-[200px] focus:outline-none input-primary input-sm rounded-l-md rounded-r-none'
                        name='search'
                        onChange={checkSearchHandle}
                        value={searchValue?.search}
                    />
                    <button className='btn btn-primary btn-sm rounded-l-none rounded-r'>
                        <Search_s />
                    </button>
                </form>
                <button className='mt-4 btn btn-primary btn-outline btn-sm' onClick={()=>router?.replace('/products/add')}>
                    Add Product
                </button>
            </div>
            <UserProducts />
            
        </div>
    );
};

export default Index;