/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Loading from "../Common/Loading";
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { capitalizeFirstLetter } from "./Login";
import axios from "axios";


const Register = () => {
    const router = useRouter();

    const { register, handleSubmit, reset } = useForm();

    const [createUserWithEmailAndPassword, user1, loading1, error1] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, error6] = useUpdateProfile(auth);


    const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);

    const [loginLoading, setLoading] = useState(false)
    const onSubmit = async data => {
        setLoading(true)
        data.roll = 'admin'

        // await createUserWithEmailAndPassword(data?.email, data?.password);
        // await updateProfile({ displayName: data.name })
        axios.post('/api/user', data);
        reset()
        setLoading(null)
    };

    let errMsg
    if (error1 || error2 || error6) {
        const err = error1?.message || error2?.message || error6?.message
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
                <img src="/icon/svg/signup.svg" alt="" className="w-full" />
            </div>
            <div className=" md:w-[50%] flex w-full flex-col gap-3 mx-auto max-w-sm p-4 md:max-w-md">
                <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col gap-3 mx-auto max-w-sm md:max-w-md">
                    <h1 className="text-primary text-3xl text-center">New Account</h1>

                    <p className="text-sm text-red-500">
                        {errMsg}
                    </p>
                    <input
                        type='text'
                        style={{ backgroundImage: `url('/icon/svg/login/name.svg')`, backgroundRepeat: 'no-repeat', backgroundSize: "20px 20px", backgroundPosition: ' 2% 50%' }}
                        placeholder="name"
                        className="input input-accent input-sm sm:input-md rounded-3xl"
                        {...register("name", { required: true, maxLength: 20 })}
                    />
                    <input
                        type='email'
                        style={{ backgroundImage: `url('/icon/svg/login/email.svg')`, backgroundRepeat: 'no-repeat', backgroundSize: "20px 20px", backgroundPosition: ' 2% 50%' }}

                        className="input input-accent input-sm sm:input-md rounded-3xl"
                        placeholder="email"
                        {...register("email", { pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i })}
                        required
                    />

                    <input
                        placeholder="password"
                        style={{ backgroundImage: `url('/icon/svg/login/pass.svg')`, backgroundRepeat: 'no-repeat', backgroundSize: "20px 20px", backgroundPosition: ' 2% 50%' }}
                        className="input input-accent input-sm sm:input-md rounded-3xl"
                        type="password" {...register("password", { min: 6, max: 16 })}
                        required
                    />
                    {
                        loginLoading ?
                            <span className="font-extralight btn btn-accent btn-sm sm:btn-md text-white rounded-3xl relative">

                                Sign Up
                                <p className="absolute border-b-2 border-secondary rounded-full w-6 h-6 animate-spin">

                                </p>
                            </span>
                            :
                            <button className="font-extralight btn btn-accent btn-sm sm:btn-md text-white rounded-3xl">
                                Sign Up
                            </button>
                    }

                </form>
                <button
                    className=" font-extralight btn btn-info btn-sm sm:btn-md text-white rounded-3xl flex items-center gap-1"
                    onClick={() => signInWithGoogle()}
                >
                    <img src="/icon/svg/google-login.svg" alt="" className="w-5 sm:w-7 h-auto" />
                    Sign Up With Google
                </button>

                <button onClick={() => router.replace('/login?return_url=' + return_url)} className="text-left pt-1">
                    Already Registered.
                    <span className="link-primary link-hover">
                        {" "}   Login
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Register;