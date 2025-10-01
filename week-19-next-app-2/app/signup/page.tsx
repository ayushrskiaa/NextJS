"use client"
import axios from "axios";
import { useState } from "react";

export default function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <h1 className="p-4">Sign Up</h1>

            <input 
                className="border-2 p-2" 
                type="text" 
                placeholder="username" 
                onChange={e => setUsername(e.target.value)} 
            />
            <input 
                className="border-2 p-2" 
                type="password" 
                placeholder="Password" 
                onChange={e => setPassword(e.target.value)} 
            />

            <button className="border-2 p-2" onClick={() => {
                axios.post('http://localhost:3001/api/v1/signup', {
                    username,
                    password
                })
                .then(response => {
                    console.log('Success:', response.data);
                    alert('Signup successful!');
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Signup failed: ' + (error.response?.data?.message || 'Unknown error'));
                });
            }}>Sign Up</button>
        </>
    );
}