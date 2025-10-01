// this is client component because it uses useState and useEffect
// we can use event handlers like onClick here
// we can use browser specific APIs like localStorage or window here
// we cannot use async await here


// client side rendering

/*
"use client"; // This is a client component because it uses useState and useEffect

import axios from "axios";
import { useState, useEffect } from "react";

export default function User() {
    const [Loading, setLoading] = useState(true);
    interface User {
        id: number;
        name: string;
        email: string;
    }
    const [data, setData] = useState<User[] | undefined>();

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                setData(response.data);
                setLoading(false);
            });
    }, []);
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">User Profiles</h1>
            {Loading ? (
                <div className="flex justify-center items-center">
                    <p className="text-lg">Loading users...</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {data?.map((user: User, index: number) => (
                        <div 
                            key={user.id} 
                            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200"
                        >
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                    {user.name.charAt(0)}
                                </div>
                                
                            </div>
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                {user.name}
                            </h2>
                            <p className="text-gray-600 flex items-center">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                                {user.email}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

*/


/*

//server side rendering

// this is server component all the code inside this function will run on server side 
// it will return all user data at once
// we can use async await here 
// we cannot use useState and useEffect here 
// we cannot use event handlers like onClick here 
// we cannot use browser specific APIs like localStorage or window here


import axios from "axios";

export default async function User() {
    const  response  = await axios.get("https://jsonplaceholder.typicode.com/users");
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate a 3-second delay
    const data=response.data;
    console.log("response from server");
    interface user {
        id: number;
        name: string;
        email: string;
    }
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">User Profiles</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.map((user:user) => (
                    <div
                        key={user.id}
                        className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200"
                    >
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                {user.name.charAt(0)}
                            </div>
                        </div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">
                            {user.name}
                        </h2>
                        <p className="text-gray-600 flex items-center">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                            {user.email}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
*/



import axios from "axios";

export default async function User() {
    const response = await axios.get("http://localhost:3000/api/v1/user/details");
    const data = response.data;
    interface user {
        id: number;
        name: string;
        email: string;
    }
    return (
        <div className="container mx-auto px-4 py-8">
            user page
            <br />
            {data.user}
            <br />
            {data.email}
        </div>
    );
}