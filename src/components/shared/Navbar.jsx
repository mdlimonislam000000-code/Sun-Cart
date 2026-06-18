'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import userAvatar from '../../assets/user.png'
import { LuLogOut, LuSunMedium, LuMenu } from 'react-icons/lu';
import { MdOutlineShoppingCart } from 'react-icons/md';

const Navbar = () => {
    const pathname = usePathname();

    const { data: session, isPending } = authClient.useSession()
    const user = session?.user

    console.log(user, isPending)
    const handleLogout = async () => {
        await authClient.signOut();
        window.location.reload();
    };

    const navLinks = (
        <>
            <li>
                <Link href="/" className={pathname === '/' ? 'text-orange-500 font-bold md:text-[18px] border-b-2 border-orange-500 rounded-none bg-transparent' : 'text-gray-700'} >
                    Home
                </Link>
            </li>
            <li>
                <Link href="/products" className={pathname.startsWith('/products') ? 'text-orange-500 font-bold md:text-[18px] border-b-2 border-orange-500 rounded-none bg-transparent' : 'text-gray-700'} >
                    Products
                </Link>
            </li>
            <li>
                <Link href="/my-profile" className={pathname.startsWith('/my-profile') ? 'text-orange-500 font-bold md:text-[18px] border-b-2 border-orange-500 rounded-none bg-transparent' : 'text-gray-700'}>
                    My Profile
                </Link>
            </li>
        </>
    );

    return (
        <div className="container mx-auto navbar bg-amber-100 p-3 md:p-4 rounded-b-2xl shadow-sm z-50 relative">

            <div className="navbar-start gap-2 md:gap-0">

                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost p-1 min-h-0 h-auto lg:hidden">
                        <LuMenu className="text-2xl text-gray-800" />
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[100] p-3 shadow-xl bg-amber-50 rounded-box w-52 border border-amber-200 gap-2">
                        {navLinks}
                    </ul>
                </div>

                <Link href="/" className="group flex items-center gap-1.5 md:gap-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-3 py-2 md:px-6 md:py-3 rounded-2xl font-black text-sm md:text-base shadow-lg hover:scale-105 transition-transform">
                    <LuSunMedium className="text-xl md:text-2xl group-hover:rotate-90 transition-transform duration-500" />
                    <span>SunCart</span>
                    <MdOutlineShoppingCart className="text-xl md:text-2xl hidden sm:inline-block" />
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-end flex items-center gap-2 md:gap-4">
                {isPending ? (
                    <button className="btn btn-primary opacity-50 cursor-not-allowed btn-sm md:btn-md">
                        <span className="loading loading-spinner loading-xs"></span>
                    </button>
                ) : user ? (
                    <div className='flex items-center gap-2 md:gap-3'>
                     
                        <div className="text-right sm:text-[10px]  sm:block">
                            <span className="text-[10px] text-gray-500 block font-medium ">Welcome,</span>
                            <h2 className='font-bold text-xs md:text-sm text-orange-600 '>
                                {user?.name} 
                            </h2>
                        </div>

                        <div className="avatar">
                            <div className="w-9 h-9 md:w-10 md:h-10 rounded-full ring ring-orange-400 ring-offset-2">
                                <Image
                                    src={user?.image || userAvatar}
                                    height={40}
                                    width={40}
                                    alt='profile'
                                    unoptimized
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <button onClick={handleLogout} className='btn btn-error btn-sm md:btn-md rounded-xl font-bold text-white flex items-center gap-1 px-2.5 md:px-4'>
                            <LuLogOut className='text-lg' />
                            <span className="hidden md:inline">LogOut</span>
                        </button>
                    </div>
                ) : (
                    <Link href="/login" className='btn btn-primary btn-sm md:btn-md rounded-xl font-bold px-4 md:px-6'>
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;