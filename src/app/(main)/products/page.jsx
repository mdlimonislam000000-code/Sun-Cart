'use client'
import React, { useState } from 'react';
import products from "../../../../data/products.json"
import Image from 'next/image';
import { FaRegStar } from 'react-icons/fa';
import Link from 'next/link';

const ProductPage = () => {
   
    const [visibleProduct, setVisibleProduct] = useState(6);

    const displayProducts = products.slice(0, visibleProduct);

    return (
        <div className='container mx-auto p-4 space-y-8'>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {
                    displayProducts.map(product => (
                        <div key={product.id} className='border rounded-2xl p-4 flex flex-col justify-between bg-white shadow-sm hover:shadow-md transition-all relative overflow-hidden'>
                            <div>
                                <div className='w-full h-64 relative overflow-hidden rounded-xl bg-gray-100 mb-4'>
                
                                    {product.isPopular && (
                                        <span className='absolute top-3 right-3 bg-amber-50 p-2 text-red-500 text-[10px] font-black px-2 py-0.5 rounded-full z-10  tracking-wider'>
                                            Popular 🔥
                                        </span>
                                    )}

                                    <Image
                                        src={product.image}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className='object-cover'
                                        alt='product'
                                    />
                                </div>
                                <h1 className='text-lg font-bold text-gray-800 line-clamp-1'>{product.name}</h1>
                            </div>

                            <div className='flex justify-between items-center mt-1 pt-3 border-t border-gray-100'>
                                <p className='text-sm text-gray-500 font-medium'>{product.category}</p>
                                <p className='text-xl font-black text-gray-900'>{product.price} Taka</p>
                            </div>

                            <div className='flex justify-between mt-2'>
                                <p className='flex gap-1 items-center font-bold'> <FaRegStar className='text-amber-500' />{product.rating}</p>
                                <p className='font-bold flex items-center'> <span>Stock: </span>{product.stock}</p>
                            </div>

                            <div>
                                <Link href={`/details/${product.id}`}>
                                    <button className="w-full font-bold text-[18px] mt-3 btn btn-active btn-primary">View details</button>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>

            {visibleProduct < products.length && (
                <div className='flex justify-center pt-4'>
                    <button
                        onClick={() => setVisibleProduct(products.length)}
                        className="btn btn-outline btn-primary font-bold px-8 rounded-xl shadow-sm"
                    >
                        See More
                    </button>
                </div>
            )}

        </div>
    );
};

export default ProductPage;