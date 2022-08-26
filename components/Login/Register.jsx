/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";


const Register = () => {
    const router = useRouter();


    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="flex justify-between items-center">
            <div className="w-[50%] hidden md:block">
                <img src="/icon/svg/signup.svg" alt="" className="w-full" />
            </div>
            <div className="w-full md:w-[50%] ">
                <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col gap-3 mx-auto max-w-sm p-4 md:max-w-md">
                    <h1 className="text-primary text-3xl text-center">New Account</h1>
                    <input
                        type='text'
                        style={{ backgroundImage: `url('/icon/svg/login/name.svg')`, backgroundRepeat: 'no-repeat', backgroundSize: "20px 20px", backgroundPosition: ' 2% 50%' }}
                        placeholder="name"
                        className="input input-accent input-sm sm:input-md rounded-3xl"
                        {...register("firstName", { required: true, maxLength: 20 })}
                    />

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

                    <button onClick={() => router.replace('/login')} className="text-left pt-1">
                        Already Registered.
                        <span className="link-primary link-hover">
                            {" "}   Login
                        </span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;