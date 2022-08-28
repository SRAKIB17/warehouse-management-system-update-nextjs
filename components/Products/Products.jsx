import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Common/Loading';
import Pagination from '../hooks/client/Pagination';
import Sliders_settings_filter from '../LogoSvg/Sliders_settings_filter';
import ProductsFilter from './ProductsFilter';
import ProductShow from './ProductShow';

const Products = () => {
    const router = useRouter()
    const { cat, page, showP } = router?.query || ' '
    const [getPage, setPage] = useState(1);
    const [show, setShow] = useState(8);
    const [lastPage, setLastPage] = useState(2);




    const { data, isLoading } = useQuery(['Products', cat, show, getPage], () => axios.get(`/api/products?cat=${cat}&show=${show}&page=${getPage}`))
    const count = data?.data?.count
    const products = data?.data?.result

    console.log(products)

    useEffect(() => {
        if (page) {
            pageHandle(page)
            setPage(eval(page))
        }
    }, [page])



    useEffect(() => {
        if (showP) {
            setShow(eval(showP))
        }
    }, [showP])

    useEffect(() => {
        const divided = Math.ceil(count / show)
        setLastPage(divided);
    }, [count, show])


    const pageHandle = (jump) => {
        router.query.page = jump;
        setPage(eval(jump))
        router.push(router)
    }

    const categoryHandle = (catValue) => {
        router.query.cat = catValue;
        router.query.page = 1;
        router.push(router)
    }

    // OPEN FILTER //
    function openFilterNav() {
        document.getElementById("productsFilterNav").style.width = "300px";
    }

    return (
        <div>
            <div className='mt-9 border-b-4 w-fit mx-auto border-primary rounded-md'>
                <h1 className='text-[25px] sm:text-3xl font-extrabold text-center text-gray-600'>
                    Most Popular

                </h1>
                <h6 className='text-lg font-bold text-center text-gray-500'>
                    Trending Inventories
                </h6>
            </div>

            <div
                className='m-4 md:mr-4  md:ml-4 xl:mr-28 xl:ml-28'>


                {
                    isLoading ?
                        <div className='relative h-56'>
                            <Loading />
                        </div>
                        :
                        <div>

                            {/* <div className=' sm:flex sm:items-center sm:justify-between '> */}
                            <div>
                                <div className='relative left-0'>
                                    <button className=' cursor-pointer' onClick={openFilterNav}>
                                        <Sliders_settings_filter
                                            color='currentColor'
                                            size='32'
                                            strokeColor='currentColor'
                                            strokeWidth='1'
                                        />
                                    </button>
                                    <ProductsFilter />
                                </div>
                            </div>

                            <div className='text-end mt-5 mb-5 flex items-center gap-1 justify-end'>
                                <div>
                                    <form action="" onSubmit={(e) => {
                                        e.preventDefault()
                                        pageHandle(e.target.pageJump.value)
                                    }}
                                        className="flex gap-1 items-center"
                                    >
                                        <input
                                            type="number"
                                            min='1'
                                            name='pageJump'
                                            max={eval(lastPage)}
                                            className="input input-xs  sm:input-sm input-info w-16"
                                            defaultValue={getPage}
                                        />
                                        <button className='btn btn-xs sm:btn-sm btn-info text-white'>
                                            Jump
                                        </button>
                                    </form>
                                </div>
                                <div>
                                    <Pagination
                                        lastPage={lastPage}
                                        page={getPage}
                                        pageHandle={pageHandle}
                                    />
                                </div>
                            </div>
                            {/* </div> */}
                            <div className='grid p-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 xl:gap-5'>
                                {
                                    products?.map((product, index) =>
                                        // <Service props={service} key={index} />
                                        <ProductShow key={index} props={product} />
                                    )
                                }
                            </div>
                            <div className='text-end mt-5'>
                                <div>
                                    <Pagination
                                        lastPage={lastPage}
                                        page={getPage}
                                        pageHandle={pageHandle}
                                    />
                                </div>
                            </div>
                        </div>
                }
            </div>


        </div >
    );
};

export default Products;