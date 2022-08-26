/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import { capitalizeFirstLetter } from "./Login";

const Reset = () => {

    const router = useRouter();
    const { return_url } = router?.query
    const { register, handleSubmit, reset } = useForm();
    // for reset password 
    const [sendPasswordResetEmail, sending, error4] = useSendPasswordResetEmail(auth);

    let errMsg = ''
    if (error4) {
        const err = error4?.message
        errMsg =
            < p className="text-sm text-red-500" >
                {capitalizeFirstLetter(err?.split('/')[1].slice(0, err?.split('/')[1].length - 2).split('-').join(' ').toLowerCase())}
            </p >
    }
    const [loginLoading, setLoading] = useState(false)

    const onSubmit = async data => {
        setLoading(true)
        await sendPasswordResetEmail(data.email)
        reset()
        errMsg =
            < p className="text-sm text-red-500" >
                Please check your email
            </p >
        setLoading(null)
    };


    return (
        <div className="flex justify-between items-center">
            <div className="w-[50%] hidden md:block">
                <img src="/icon/svg/reset-pass.svg" alt="" className="w-full max-h-[700px]" />
            </div>

            <div className=" md:w-[50%] flex w-full flex-col gap-3 mx-auto max-w-sm p-4 md:max-w-md">
                <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col gap-3 mx-auto max-w-sm md:max-w-md">
                    <h1 className="text-primary text-3xl text-center">Reset Password</h1>
                    {
                        errMsg
                    }
                    <input
                        type='email'
                        style={{ backgroundImage: `url('/icon/svg/login/email.svg')`, backgroundRepeat: 'no-repeat', backgroundSize: "20px 20px", backgroundPosition: ' 2% 50%' }}

                        className="input input-accent input-sm sm:input-md rounded-3xl"
                        placeholder="email"
                        {...register("email", { pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i })}
                        required
                    />
                    {
                        loginLoading ?
                            <span className="font-extralight btn btn-accent btn-sm sm:btn-md text-white rounded-3xl relative">
                                Reset Password
                                <p className="absolute border-b-2 border-secondary rounded-full w-6 h-6 animate-spin">

                                </p>
                            </span>
                            :
                            <button className="btn btn-accent btn-sm sm:btn-md text-white rounded-3xl">
                                Reset Password
                            </button>
                    }

                </form>

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

export default Reset;