"use client"
import React from 'react';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import userAvatar from '@/assets/user.png';
import Footer from '@/components/shared/Footer';


const MyProfilePage = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    if (isPending) {
        return (
            <div className="flex justify-center items-center min-h-[60vh]">
                Loading<span className="loading loading-ring loading-xl"></span>
            </div>
        );
    }

    return (
        <div className=''>
            <div className="container mx-auto p-6 flex justify-center items-center min-h-[70vh]">
                <div className="card w-full max-w-md bg-base-100 shadow-xl border border-gray-200 p-6 rounded-2xl">
                    <h2 className="text-3xl font-bold text-center text-orange-600 mb-6">My Profile</h2>

                    <div className="flex flex-col items-center gap-4">
                        <div className="w-24 h-24 relative overflow-hidden rounded-full border-4 border-amber-400 shadow-md">
                            <Image
                                src={user?.image || userAvatar}
                                alt="Profile"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>

                        <div className="w-full space-y-3 mt-4">
                            <div className="bg-amber-50/50 p-3 rounded-xl border border-amber-100">
                                <p className="text-xs text-gray-500 font-medium">Full Name</p>
                                <p className="text-lg font-semibold text-gray-800 capitalize">{user?.name}</p>
                            </div>

                            <div className="bg-amber-50/50 p-3 rounded-xl border border-amber-100">
                                <p className="text-xs text-gray-500 font-medium">Email Address</p>
                                <p className="text-lg font-semibold text-gray-800">{user?.email}</p>
                            </div>
                        </div>

                        <Link href="/profile/update" className="btn btn-primary w-full mt-6 font-bold rounded-xl shadow-md">
                            Update Information
                        </Link>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyProfilePage;