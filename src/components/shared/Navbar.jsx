'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import userAvatar from '../../assets/user.png'
import { LuLogOut, LuSunMedium } from 'react-icons/lu';
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

    return (
        <div className="container mx-auto navbar bg-amber-100 p-4 rounded-b-2xl shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>

                </div>
                <button className="group flex items-center gap-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-6 py-3 rounded-2xl font-bold shadow-lg hover:scale-105 transition-transform">
                    <LuSunMedium className="text-2xl group-hover:rotate-90 transition-transform duration-500" />
                    <span>SunCart</span>
                    <MdOutlineShoppingCart className="text-2xl" />
                </button>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href="/" className={pathname === '/' ? 'text-primary font-bold text-[18px] border-b-2 border-primary rounded-none' : ''} >Home</Link></li>

                    <li><Link href="/products" className={pathname.startsWith('/products') ? 'text-primary font-bold text-[18px] border-b-2 border-primary rounded-none' : 'text-gray-600'} >Products</Link></li>

                    <li><Link href="/profile" className={pathname.startsWith('/profile') ? 'text-primary font-bold text-[18px] border-b-2 border-primary rounded-none' : 'text-gray-600'}>My Profile</Link></li>
                </ul>
            </div>
            <div className="navbar-end flex items-center gap-4">
                {isPending ? <button className="btn btn-primary opacity-50 cursor-not-allowed">
                    <span className="loading loading-spinner loading-xs"></span>
                </button> : user ? <div className='flex gap-3 '>
                    <div className="text-right">
                        <span className="text-xs text-gray-500 block font-medium">Welcome,</span>
                        <h2 className='font-bold text-sm text-orange-600 md:text-base capitalize'>
                            {user?.name}
                        </h2>
                    </div>
                    <Image
                        src={user?.image || userAvatar}
                        height={35}
                        width={40}
                        alt='profile'
                        unoptimized
                        className="rounded-full object-cover"
                    />
                    <button onClick={async () => await authClient.signOut()} className='btn btn-error rounded-xl font-bold text-white flex items-center gap-1'>
                        <LuLogOut className='text-xl' />
                        <span>LogOut</span>
                    </button>

                </div> :
                    <button className='btn btn-primary'><Link href="/login">Login</Link></button>}
            </div>
        </div>
    );
};

export default Navbar;