import React from 'react';
import styles from './productsFilter.module.css'
import { useRouter } from 'next/router';
import axios from 'axios'
import { useQuery } from 'react-query';
import Loading from '../Common/Loading';

const ProductsFilter = ({ categoryHandle, show, setShow, pageHandle, cat }) => {
    const router = useRouter()
    const { data, isLoading } = useQuery('category', () => axios.get('api/products/category'))
    const category = data?.data || []
    function closeNav() {
        document.getElementById("productsFilterNav").style.width = "0";
    }

    return (
        <div id="productsFilterNav" className={styles.filterNav + " bg-neutral"}>
            <a
                href="javascript:void(0)"
                className={styles.closebtn}
                onClick={() => closeNav()}
            >&times;</a>

            <div>
                <div className='mt-10 p-4'>
                    <div className=" flex flex-col">
                        {
                            isLoading ?
                                <Loading />
                                :
                                <form onSubmit={(e)=>e.preventDefault()}>
                                    <ul className="menu bg-base-100 w-full p-4 rounded-box">
                                        <h1 className='text-sm font-extrabold'>Category</h1>
                                        {
                                            category?.map((cat, index) => {

                                                return <li key={index}>
                                                    <label
                                                        className="cursor-pointer flex justify-between"
                                                        htmlFor={cat}
                                                    >
                                                        <span
                                                            className="label-text"
                                                        >
                                                            {cat}
                                                        </span>
                                                        <input
                                                            type="checkbox"
                                                            className="radio"
                                                            id={cat}
                                                        />
                                                    </label>
                                                </li>
                                            })
                                        }
                                    </ul>

                                </form>
                        }


                    </div>

                    <select
                        name=""
                        id=""
                        value={cat}
                        className='select-sm select select-info bg-blue-100'
                        onChange={(e) => categoryHandle(e.target.value)}
                    >
                        <option value="" disabled>Category</option>
                        <option value="design">Design</option>
                        <option value="programming">Programming</option>
                        <option value="freelancer">Freelancer</option>
                        <option value="development">Web Development</option>
                        {/* <option value="6">6</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="25">25</option>
                        <option value="30">30</option> */}
                    </select>
                </div>
                <div >
                    <select
                        name=""
                        id=""
                        value={show}
                        className='select-sm select select-info bg-blue-100'
                        onChange={(e) => {
                            const showing = e.target.value
                            router.query.showP = showing;
                            router.query.page = 1;
                            router.push(router)
                            setShow(eval(showing))
                        }
                        }
                    >
                        <option value="" disabled>Show Per Page</option>
                        <option value="1">1</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="25">25</option>
                        <option value="30">30</option>
                    </select>
                </div>

                <div>
                    {/* <form action="" onSubmit={(e) => {
                        e.preventDefault()
                        pageHandle(e.target.pageJump.value)
                    }}
                        className="flex gap-1 items-center"
                    >
                        <input
                            type="number"
                            min='1'
                            name='pageJump'
                            max={lastPage}
                            className="input input-sm input-info w-16"
                            defaultValue={getPage}
                        />
                        <button className='btn btn-sm btn-info text-white'>
                            Jump
                        </button>
                    </form> */}
                </div>
                <div>
                    <form onSubmit={() => router.replace('/courses')}>
                        <input type="submit" value="reset" className='btn btn-sm font-extralight btn-warning text-white' />
                    </form>
                </div>
            </div>
            {/* <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a> */}
        </div >
    );
};

export default ProductsFilter;