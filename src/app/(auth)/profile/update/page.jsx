"use client"
import React, { useState } from 'react';
import { authClient } from "@/lib/auth-client";
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';


const UpdatePage = () => {
    const router = useRouter();
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
 

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const { data, error } = await authClient.updateUser({
            name: name,
            image: image,
           
        });
        if (error) {
            toast(error.message || " Error ");
        } else {
            toast("Your Profile Is updated");
            router.push('/profile');
            router.refresh();
        }

        console.log(data , error)
    };
    return (
        <div>
            <div className="p-6 max-w-md mx-auto">
                <form onSubmit={handleFormSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Write Your Name"
                        className="input border-gray-300 w-full"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                  
                    <input
                        type="url"
                        placeholder="Write Your New Url"
                        className="input border-gray-300 w-full"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                    <button type="submit" className="btn btn-primary w-full">Update Information</button>
                </form>
            </div>
        </div>
    );
};

export default UpdatePage;