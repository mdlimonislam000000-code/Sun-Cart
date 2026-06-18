'use client'
import React, { use } from 'react';
import products from "../../../../../data/products.json"; 
import Image from 'next/image';
import Link from 'next/link';
import { FaRegStar } from 'react-icons/fa';
import { FiBox, FiShoppingCart } from 'react-icons/fi';
import Footer from '@/components/shared/Footer';

const ProductDetailsPage =  ({ params }) => {
    const { id } = use(params);
   
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
        return (
            <div className="container mx-auto p-10 text-center">
                <h2 className="text-2xl font-bold text-red-500">There is No Product!</h2>
                <Link href="/products" className="btn btn-primary mt-4">Go Back</Link>
            </div>
        );
    }

    return (
        <div>
            <div className="container mx-auto p-6 max-w-6xl min-h-screen flex items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-3xl border shadow-sm w-full">

                    <div className="w-full h-80 md:h-[400px] relative overflow-hidden rounded-2xl bg-gray-50">
                        <Image
                            src={product.image}
                            fill
                            className="object-cover"
                            alt={product.name}
                        />
                    </div>

                    <div className="flex flex-col justify-between">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-orange-500 bg-orange-50 px-3 py-1 rounded-full w-fit">
                                {product.category}
                            </span>

                            <h1 className="text-3xl font-black text-gray-800 mt-3 mb-2">{product.name}</h1>
                            <p className="text-sm text-gray-400 font-medium mb-4">Brand: {product.brand}</p>

                            <p className="text-gray-600 leading-relaxed mb-6">
                                {product.description}
                            </p>

                            <div className="flex gap-6 items-center text-sm text-gray-700 mb-6">
                                <p className="flex gap-1 items-center font-bold text-amber-500">
                                    <FaRegStar className="fill-amber-500" /> {product.rating}
                                </p>
                                <p className="flex gap-1 items-center font-bold text-slate-600">
                                    <FiBox className="text-lg" /> Stock: {product.stock}
                                </p>

                                <div className='flex items-center'>
                                    <p className="text-xl text-gray-600 block  font-medium"> Prize :  </p>
                                    <p className="text-xl font-semibold text-gray-800"> {product.price} Taka</p>
                                </div>
                            </div>
                        </div>

                        <div className="border-t pt-4 flex items-center justify-between">

                            <button  className= ' w-60 btn btn-outline'> <FiShoppingCart></FiShoppingCart>Add to Cart</button>

                            <Link href="/products">
                                <button className="w-50 btn btn-outline px-6 font-bold">Go Back</button>
                            </Link>
                        </div>

                        <div>
                            <Link href='/'>
                            <button className='w-full btn btn-primary'>Buy Now</button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default ProductDetailsPage;