"use client"
import Footer from '@/components/shared/Footer';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';


const RegisterPage = () => {

    const router = useRouter();
    const [isShowPassword, setIsShowPassword] = useState(true)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const handelRegisterFunc = async (data) => {
        console.log(data)
        const { name, photo, email, password } = data;
        console.log(email, name)

        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
            callbackURL: "/",
        })
        console.log(res, error)
        console.log(res, error)
        if (error) {
            toast(error.message);
        }
        if (res) {
            toast("Registration Successful! Please login.");

            return ('/login');
        }
    }


    return (
        <div>
            <div className='container mt-15 mx-auto min-h-[80vh] justify-center flex items-center bg-[#e1dfdf]'>
                <div className='p-6 rounded-2xl bg-[#ffff]'>
                    <h2>Register your Account</h2>

                    <div className='min-w-[50vh]'>
                        <form onSubmit={handleSubmit(handelRegisterFunc)}>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Your name</legend>
                                <input type="text" name='name' className="input w-full" placeholder="Type your full name" {...register("name", { required: true })} />
                                {errors.name && <p>You need fulfil your name</p>}
                            </fieldset>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Photo url</legend>
                                <input type="text" name='photo' className="input w-full" placeholder="Type your photo url" {...register("photo", { required: true })} />
                                {errors.photo && <p>You need fulfil from</p>}
                            </fieldset>

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
                            <button className="btn btn-primary w-full mt-5">Register</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default RegisterPage;
