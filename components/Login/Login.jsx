/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {

    const router = useRouter();

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="flex justify-between items-center">
            <div className="w-[50%] hidden md:block">
                <img src="/icon/svg/login.svg" alt="" className="w-full" />
            </div>
            <div className="w-full md:w-[50%] ">
                <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col gap-3 mx-auto max-w-sm p-4 md:max-w-md">
                    <h1 className="text-primary text-3xl text-center">Login</h1>

                    <input
                        type='email'
                        style={{ backgroundImage: `url('/icon/svg/login/email.svg')`, backgroundRepeat: 'no-repeat', backgroundSize: "20px 20px", backgroundPosition: ' 2% 50%' }}

                        className="input input-accent input-sm sm:input-md rounded-3xl"
                        placeholder="email"
                        {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
                    />

                    <input
                        placeholder="password"
                        style={{ backgroundImage: `url('/icon/svg/login/pass.svg')`, backgroundRepeat: 'no-repeat', backgroundSize: "20px 20px", backgroundPosition: ' 2% 50%' }}
                        className="input input-accent input-sm sm:input-md rounded-3xl"
                        type="password" {...register("age", { min: 18, max: 99 })}
                    />
                    <button className="btn btn-accent btn-sm sm:btn-md text-white rounded-3xl">
                        Login
                    </button>
                    <button className="btn btn-info btn-sm sm:btn-md text-white rounded-3xl flex items-center gap-1">
                        <img src="/icon/svg/google-login.svg" alt="" className="w-7 h-auto" />
                        Login With Google
                    </button>
                    <button onClick={() => router.replace('/login/reset')} className="text-left pt-1">
                        Forgat password.
                        <span className="link-primary link-hover">
                            {" "}   Reset Password
                        </span>
                    </button>
                    <button onClick={() => router.replace('/login/new')} className="text-left pt-1">
                        New here.
                        <span className="link-primary link-hover">
                            {" "}   Create Account
                        </span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;