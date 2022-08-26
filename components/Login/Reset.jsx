/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";

const Reset = () => {

    const router = useRouter();

    const { register, handleSubmit } = useForm();
    
    const onSubmit = data => console.log(data);
    return (
        <div className="flex justify-between items-center">
            <div className="w-[50%] hidden md:block">
                <img src="/icon/svg/reset-pass.svg" alt="" className="w-full max-h-[700px]" />
            </div>

            <div className=" md:w-[50%] flex w-full flex-col gap-3 mx-auto max-w-sm p-4 md:max-w-md">
                <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col gap-3 mx-auto max-w-sm md:max-w-md">
                    <h1 className="text-primary text-3xl text-center">Reset Password</h1>
              
                    <input
                        type='email'
                        style={{ backgroundImage: `url('/icon/svg/login/email.svg')`, backgroundRepeat: 'no-repeat', backgroundSize: "20px 20px", backgroundPosition: ' 2% 50%' }}

                        className="input input-accent input-sm sm:input-md rounded-3xl"
                        placeholder="email"
                        {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
                    />

                </form>
                <button className="btn btn-accent btn-sm sm:btn-md text-white rounded-3xl">
                    Reset Password
                </button>

                <button onClick={() => router.replace('/login')} className="text-left pt-1">
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