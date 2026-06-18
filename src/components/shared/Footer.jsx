import Link from 'next/link';
import React from 'react';
import { CiTwitter } from 'react-icons/ci';
import { FaFacebook, FaInstagramSquare } from 'react-icons/fa';
import { FaLocationDot, FaMobileScreenButton } from 'react-icons/fa6';
import { IoIosMailOpen } from 'react-icons/io';
import { LuSunMedium } from 'react-icons/lu';


const Footer = () => {
    return (
        <div>
            <footer className="w-full bg-amber-100 from-transparent to-orange-50/60 border-t border-orange-100/40 pt-16 pb-8 mt-24">
                <div className="container mx-auto px-6 md:px-12">

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

                        <div className="space-y-4">
                            <Link href="/" className="text-2xl font-black flex items-center gap-2 ">
                                <span className="bg-linear-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                                    SunCart
                                </span>
                                <LuSunMedium className="text-3xl text-amber-500" />
                            </Link>
                            <p className="text-sm text-gray-500 font-medium leading-relaxed">
                                The only trusted online shop for all your summer essentials, including sunglasses, skincare, and beach accessories...!
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h4 className="text-sm font-black text-gray-900 uppercase tracking-wider">Quick Links</h4>
                            <ul className="space-y-2 text-sm font-medium text-gray-600">
                                <li><Link href="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
                                <li><Link href="/" className="hover:text-orange-500 transition-colors">All Products</Link></li>
                                <li><Link href="/profile" className="hover:text-orange-500 transition-colors">My Profile</Link></li>
                            </ul>
                        </div>

                        <div className="space-y-3">
                            <h4 className="text-sm font-black text-gray-900 uppercase tracking-wider">Contact Info</h4>
                            <ul className="space-y-2 text-sm font-medium text-gray-600">
                                <li className="flex items-center gap-2"> <span><FaMobileScreenButton /></span> <span>+880 12********</span></li>
                                <li className="flex items-center gap-2"><span><IoIosMailOpen /></span> <span>support@suncart.com</span></li>
                                <li className="flex items-center gap-2"><span><FaLocationDot /></span> <span>Dhaka, Bangladesh</span></li>
                            </ul>
                        </div>

                        <div className="space-y-3">
                            <h4 className="text-sm font-black text-gray-900 uppercase tracking-wider">Follow Us</h4>
                            <div className="flex gap-4">
                   
                                <a href="#" className="w-9 h-9 flex items-center justify-center rounded-xl bg-white border border-gray-100  hover:text-blue-600 hover:border-blue-200  font-bold">
                                    <FaFacebook />
                                </a>
                                <a href="#" className="w-9 h-9 flex items-center justify-center rounded-xl bg-white border border-gray-100  hover:text-pink-600  font-bold">
                                    <FaInstagramSquare />
                                </a>
                                <a href="#" className="w-9 h-9 flex items-center justify-center rounded-xl bg-white border border-gray-100  hover:text-black hover:border-gray-300  font-bold">
                                    <CiTwitter />
                                </a>
                            </div>
                        </div>

                    </div>

               
                    <div className="pt-8 border-t border-gray-200/60 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold text-gray-400 hover:text-gray-600 ">
                        <p>© 2026 SunCart Store. All rights reserved by Limon.</p>

                        <div className="flex gap-6">
                            <Link href="/" className="hover:text-gray-600 transition-colors">Privacy Policy</Link>
                            <Link href="/" className="hover:text-gray-600 transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;