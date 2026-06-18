"use client"
import Footer from '@/components/shared/Footer';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';

const LoginPage = () => {
    const handleGoogleSingIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }

    const [isShowPassword, setIsShowPassword] = useState(true)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handelLoginFunc = async (data) => {
        console.log(data)

        const { data: res, error } = await authClient.signIn.email({
            email: data.email, // required
            password: data.password, // required
            rememberMe: true,
            callbackURL: "/",
        });

        if (error) {
            alert(error.message || "Login failed! Please check your credentials.");
        }

        if (res) {
            alert("Login Successful! Welcome back.");
            return ('/');

        }

    }
    console.log(errors)



    return (
        <div>
            <div className='container mt-15 rounded-2xl mx-auto min-h-[80vh] justify-center flex items-center bg-[#e1dfdf]'>
                <div className='p-6 rounded-2xl bg-[#ffff]'>
                    <h2>Login your Account</h2>

                    <div className='min-w-[50vh]'>
                        <form onSubmit={handleSubmit(handelLoginFunc)}>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Email Address</legend>
                                <input type="email" name='email' className="input w-full" placeholder="Type your email" {...register("email", { required: true })} />
                                {errors.email && <p>You need fulfil email</p>}
                            </fieldset>

                            <fieldset className="fieldset relative">
                                <legend className="fieldset-legend">PassWord</legend>
                                <input type={isShowPassword ? "text" : "password"} name='password' className="input w-full" placeholder="Type your pass" {...register("password", { required: true })} />
                                {errors.password && <p>You need fullfil password</p>}

                                <span className='absolute cursor-pointer right-1 top-3 text-2xl' onClick={() => setIsShowPassword(!isShowPassword)}>{isShowPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</span>
                            </fieldset>
                            <button className="btn btn-primary w-full mt-5">Login</button>
                        </form>
                    </div>

                    <div className='mt-5 text-center'>
                        <p>Don't Have an account? <span className='text-[#4a0bea]'><Link href="/register">Register</Link></span></p>
                    </div>

                    <div className='flex flex-col items-center justify-center gap-2 mt-2 w-full'>
                        <h1>Or</h1>
                        <button onClick={handleGoogleSingIn} className="btn w-full  btn-ghost">
                            <FaGoogle />
                            Login with Google
                        </button>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default LoginPage;
