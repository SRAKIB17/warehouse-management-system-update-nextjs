/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import Head from 'next/head';
import Loading from '../Loading';
import { useQuery } from 'react-query';
import axios from 'axios';
import CheckAdmin from '../../hooks/client/checkAdmin';
const Navbar = () => {
    const router = useRouter()
    const path = router.asPath;
    const [user, loading, error] = useAuthState(auth);

    const [getUser, setUser] = useState({})
    useEffect(() => {
        if (typeof user === 'object') {
            setUser({ ...user })
        }

    }, [user])

    // const { data } = useQuery('user', user.email, () => axios.get(`/api/user?email=rakibulssc5%40gmail.com`))
    const { admin } = CheckAdmin()
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="navbar justify-between pr-4 pl-4 bg-primary text-white">
                <div className="">
                    <div className="dropdown">

                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>


                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='text-black'>
                                <button onClick={() => router.replace('/')}>
                                    Home
                                </button>
                            </li>
                            <li className='text-black'>
                                <button onClick={() => router.replace('http://prog-learn.vercel.app/story')}>
                                    Blog
                                </button>
                            </li>

                            {
                                !user &&
                                <li className='text-black'>
                                    <button onClick={() => {
                                        router.replace('/login?return_url=' + path)
                                    }}>
                                        Login
                                    </button>
                                </li>
                            }
                            {
                                !user ||
                                <>
                                    {
                                        admin?.admin &&
                                        <li className='text-black'>
                                            <button onClick={() => {
                                                router.replace('/products/manage')
                                            }}>
                                                Manages Product
                                            </button>
                                        </li>
                                    }
                                    <li className='text-black'>
                                        <button onClick={() => {
                                            router.replace('/products/manage/my')
                                        }}>
                                            My Product
                                        </button>
                                    </li>

                                    <li className='text-black'>
                                        <button onClick={() => {
                                            router.replace('/products/add')
                                        }}>
                                            Add Product
                                        </button>
                                    </li>
                                </>
                            }
                        </ul>
                    </div>
                    <button
                        onClick={() => router.replace('/')}
                        className="btn btn-ghost normal-case text-xl"
                    >
                        <img src="/logo.png" alt="" className='h-full p-1' />
                    </button>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li>
                            <button onClick={() => router.replace('/')}>
                                Home
                            </button>
                        </li>
                        <li>
                            <button onClick={() => router.replace('http://prog-learn.vercel.app/story')}>
                                Blog
                            </button>
                        </li>

                        {
                            !user &&
                            <li className='text-white'>
                                <button onClick={() => {
                                    router.replace('/login?return_url=' + path)
                                }}>
                                    Login
                                </button>
                            </li>
                        }
                        {
                            !user ||
                            <>
                                <li className='text-white'>
                                    <button onClick={() => {
                                        router.replace('/products/manage/my')
                                    }}>
                                        My Product
                                    </button>
                                </li>
                                {
                                    admin?.admin &&
                                    <li className='text-white'>
                                        <button onClick={() => {
                                            router.replace('/products/manage')
                                        }}>
                                            Manages Product
                                        </button>
                                    </li>
                                }
                                <li className='text-white'>
                                    <button onClick={() => {
                                        router.replace('/products/add')
                                    }}>
                                        Add Product
                                    </button>
                                </li>
                            </>
                        }

                    </ul>
                </div>

                <div className="flex-none gap-9 items-center">
                   
                    <div className="dropdown dropdown-end">


                        {
                            !user ?
                                <label
                                    onClick={() => {
                                        router.replace('/login?return_url=' + path)
                                    }}
                                    className="btn btn-ghost btn-circle avatar ring ring-primary ring-offset-base-100 ring-offset-2"
                                >
                                    <div className="w-10 rounded-full">
                                        <img src="/icon/svg/loginAvata.svg" />
                                    </div>
                                </label>
                                :
                                <>
                                    <label
                                        tabIndex='0'
                                        className="btn btn-ghost btn-circle avatar ring ring-primary ring-offset-base-100 ring-offset-1"
                                    >
                                        <div className="w-10 rounded-full">
                                            <img src={user?.photoURL} />
                                        </div>
                                    </label>
                                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
                                        <li onClick={() => router.replace('/profile')}>
                                            <a className="justify-between">
                                                Profile
                                                <span className="badge">New</span>
                                            </a>
                                        </li>

                                        <li><a>Settings</a></li>
                                        <li onClick={() => signOut(auth)}>
                                            <a>
                                                Logout
                                            </a>
                                        </li>
                                    </ul>
                                </>
                        }


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
