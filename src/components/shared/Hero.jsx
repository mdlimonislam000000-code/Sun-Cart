'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import products from "../../../data/products.json";
import { MdOutlineShoppingCart } from 'react-icons/md';

const Hero = () => {
    const sliderProducts = products.slice(0, 6);
    const [currentProduct, setCurrentProduct] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentProduct((OneProduct) =>
                OneProduct === sliderProducts.length - 1 ? 0 : OneProduct + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [sliderProducts.length]);

    const product = sliderProducts[currentProduct];


    return (
        <div className='container mx-auto p-4'>

            <div className='w-full h-[450px] md:h-[550px] relative overflow-hidden rounded-3xl bg-slate-100 shadow-lg transition-all duration-700 ease-in-out'>

                <Image
                    src={product.image}
                    fill
                    sizes="100vw"
                    className='object-cover brightness-75'
                    alt={product.name || 'product'}
                    key={product.id}
                    priority
                />

                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12 text-white'>
                    <div className='flex gap-2 mb-1 flex-wrap'>
                        <h1 className="text-5xl md:text-6xl font-black text-gray-900 animate__animated animate__fadeInDown">
                            SunCart <span className="text-orange-500 animate__animated animate__pulse animate__infinite">Summer Sale 50% OFF 🔥</span>
                        </h1>

                        <span className='text-xs md:text-sm font-bold uppercase tracking-wider text-white bg-red-600 px-4 py-1.5 rounded-full shadow-md'>
                            Hot Deals 🔥
                        </span>
                    </div>
                    <p className=" mb-2 text-[#ffff] animate__animated animate__fadeIn animate__delay-1s">
                        Explore the best seasonal products now!
                    </p>

                    <span className='text-xs font-bold uppercase tracking-widest text-amber-300 mb-1'>
                        {product.category}
                    </span>

                    <h1 className='text-3xl md:text-5xl font-black mb-2 drop-shadow-md max-w-2xl leading-tight'>
                        {product.name}
                    </h1>

                    <p className='text-base md:text-lg text-amber-400 font-black drop-shadow'>
                        Special Price: {product.price} Taka
                    </p>

                    <div className="animate__animated animate__zoomIn animate__delay-2s pt-4">
                        <button className="btn btn-warning font-bold px-8 rounded-full shadow-lg hover:scale-105 transition-all">
                            Shop Now <MdOutlineShoppingCart className="text-2xl" />
                        </button>
                    </div>
                </div>

                <div className='absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10 bg-black/20 backdrop-blur-md px-3 py-2 rounded-full'>
                    {sliderProducts.map((_, offer) => (
                        <button
                            key={offer}
                            onClick={() => setCurrentProduct(offer)}
                            className={`h-2.5 rounded-full transition-all duration-300 ${offer === currentProduct ? 'w-8 bg-amber-400' : 'w-2.5 bg-white/60'
                                }`}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Hero;