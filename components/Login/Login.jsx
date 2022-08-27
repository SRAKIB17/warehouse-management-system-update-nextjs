/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import FirebaseCheckUser from "../hooks/client/FirebaseCheckUser";
import Loading from "../Common/Loading";

const Login = () => {


    const router = useRouter();

    const { register, handleSubmit, reset } = useForm();

    const [signInWithEmailAndPassword, user1, loading1, error1] = useSignInWithEmailAndPassword(auth);



    const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);
    const [loginLoading, setLoading] = useState(false)
    const onSubmit = async data => {
        setLoading(true)
        await signInWithEmailAndPassword(data.email, data.password)
        reset()
        setLoading(null)
    };

    let errMsg
    if (error1 || error2) {
        const err = error1?.message || error2?.message
        errMsg = capitalizeFirstLetter(err.split('/')[1].slice(0, err.split('/')[1].length - 2).split('-').join(' ').toLowerCase())
    }
    const [user, loading, error] = useAuthState(auth);
    const { return_url } = router.query
    if (loading) {
        return <Loading />
    }
    if (user) {
        if (return_url) {
            router.replace(return_url)
        }
        else {
            router.replace('/')
        }
    }


    return (
        <div className="flex justify-between items-center">
            <div className="w-[50%] hidden md:block">
                <img src="/icon/svg/login.svg" alt="" className="w-full" />
            </div>
            <div className=" md:w-[50%] flex w-full flex-col gap-3 mx-auto max-w-sm p-4 md:max-w-md">
                <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col gap-3 mx-auto max-w-sm md:max-w-md">
                    <h1 className="text-primary text-3xl text-center">Login</h1>
                    <p className="text-sm text-red-500">
                        {errMsg}
                    </p>
                    <input
                        type='email'
                        style={{ backgroundImage: `url('/icon/svg/login/email.svg')`, backgroundRepeat: 'no-repeat', backgroundSize: "20px 20px", backgroundPosition: ' 2% 50%' }}

                        className="input input-accent input-sm sm:input-md rounded-3xl loginReg"
                        placeholder="email"
                        {...register("email", { pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i })}
                        required
                    />

                    <input
                        placeholder="password"
                        style={{ backgroundImage: `url('/icon/svg/login/pass.svg')`, backgroundRepeat: 'no-repeat', backgroundSize: "20px 20px", backgroundPosition: ' 2% 50%' }}
                        className="input input-accent input-sm sm:input-md rounded-3xl loginReg"
                        type="password" {...register("password", { min: 6, max: 16 })}
                        required
                    />
                    {
                        loginLoading ?
                            <span className="font-extralight btn btn-accent btn-sm sm:btn-md text-white rounded-3xl relative">

                                Login
                                <p className="absolute border-b-2 border-secondary rounded-full w-6 h-6 animate-spin">

                                </p>
                            </span>
                            :
                            <button className="font-extralight btn btn-accent btn-sm sm:btn-md text-white rounded-3xl">
                                Login
                            </button>
                    }
                </form>
                <button
                    className="btn font-extralight btn-info btn-sm sm:btn-md text-white rounded-3xl flex items-center gap-1"
                    onClick={() => signInWithGoogle()}
                >
                    <img src="/icon/svg/google-login.svg" alt="" className="w-5 sm:w-7 h-auto" />
                    Login With Google
                </button>
                <button onClick={() => router.replace('/login/reset?return_url=' + return_url)} className="text-left pt-1">
                    Forgat password.
                    <span className="link-primary link-hover">
                        {" "}   Reset Password
                    </span>
                </button>
                <button onClick={() => router.replace('/login/new?return_url=' + return_url)} className="text-left pt-1">
                    New here.
                    <span className="link-primary link-hover">
                        {" "}   Create Account
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Login;

export const capitalizeFirstLetter = (string) => {
    return string?.charAt(0)?.toUpperCase() + string?.slice(1);
}