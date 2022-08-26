import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Common/Loading';
import ProductShow from './ProductShow';

const HomeProduct = () => {
    const router = useRouter()
    const { cat } = router?.query || ' '
    const [getPage, setPage] = useState(1);
    const [show, setShow] = useState(6);
    const { data, isLoading } = useQuery(['courses', cat, show, getPage], () => axios.get(`/api/products?cat=${cat}&show=${show}&page=${getPage}`))
    const count = data?.data?.count
    const products = data?.data?.result

    return (
        <div>
            <div>
                <h1 className='text-[25px] sm:text-3xl font-extrabold text-center'>
                    Courses to get you started
                </h1>
                <h6 className='text-lg font-bold text-center'>
                    Course Complete and get professional certificate
                </h6>
            </div>

            <div
                className='m-4 md:mr-4  md:ml-4 xl:mr-40 xl:ml-40'>


                {
                    isLoading ?
                        <div className='relative h-56'>
                            <Loading />
                        </div>
                        :
                        <div>
                            <div className='text-end mt-5 mb-5'>
                                <button
                                    className='btn btn-sm btn-secondary text-white font-'
                                    onClick={() => router.replace('/products')}
                                >
                                    Show All Product
                                </button>
                            </div>
                            <div className='grid p-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 xl:gap-5'>
                                {
                                    products?.map((course, index) =>
                                        // <Service props={service} key={index} />
                                        <ProductShow key={index} props={course} />
                                    )
                                }
                            </div>
                            <div className='text-end mt-5'>
                                <button
                                    className='btn btn-sm btn-secondary font-light text-white '
                                    onClick={() => router.replace('/products')}
                                >
                                    Show All Product
                                </button>
                            </div>
                        </div>
                }
            </div>


        </div >
    );
};

export default HomeProduct;