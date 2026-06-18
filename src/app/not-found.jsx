import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 text-base-content px-4">
            <div className="text-center max-w-md">
                {/* বড় করে ৪MD৪ টেক্সট বা অ্যানিমেশন */}
                <h1 className="text-9xl font-extrabold text-primary animate-bounce">
                    404
                </h1>

                {/* মেসেজ */}
                <h2 className="text-3xl font-bold mt-4 mb-2">
                    পেজটি খুঁজে পাওয়া যায়নি!
                </h2>
                <p className="text-base-content/70 mb-6">
                    দুঃখিত, আপনি যে লিংকটি খুঁজছেন তা হয়তো মুছে ফেলা হয়েছে অথবা ইউআরএলটি ভুল ছিল।
                </p>

                {/* হোম পেজে ফিরে যাওয়ার বাটন */}
                <Link href="/" className="btn btn-primary btn-wide shadow-lg">
                    হোম পেজে ফিরে যান
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;