/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
const Navbar = () => {
    const router = useRouter()
    const path = router.asPath;
    const [user, loading, error] = useAuthState(auth);

    return (
        <div>
            <div className="navbar justify-between pr-4 pl-4 bg-primary text-white">
                <div className="">
                    <div className="dropdown">

                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>


                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='text-black'><a>Item 1</a></li>
                            <li className='text-black' tabIndex="0">
                                <a className="justify-between">
                                    Parent
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                {/* <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul> */}
                            </li>
                            <li className='text-black'><a>Item 3</a></li>
                        </ul>
                    </div>
                    <button
                        onClick={() => router.replace('/')}
                        className="btn btn-ghost normal-case text-xl"
                    >
                       <img src="/logo.png" alt="" className='h-full p-1'/>
                    </button>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><a>Item 1</a></li>
                        <li tabIndex="0">
                            <a>
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>

                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <label tabIndex="0" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </label>
                        <div tabIndex="0" className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body text-black">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">


                        {
                            user ?
                                <>
                                    <label
                                        tabIndex='0'
                                        className="btn btn-ghost btn-circle avatar ring ring-primary ring-offset-base-100 ring-offset-2"
                                    >
                                        <div className="w-10 rounded-full">
                                            <img src={user?.photoURL} />
                                        </div>
                                    </label>
                                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
                                        <li>
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
                                :
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
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;