"use client" // This makes it a Client Component

import axios from "axios";

export default function SignInPage() {
    return (
        <div>
            <h1>Sign In</h1>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={async () => {
                const res = await axios.post("http://localhost:3001/api/signin", {
                    username: "user1",
                    password: "pass1"
                })
                localStorage.setItem("token", res.data.token);
            }} type="submit">Sign In</button>
        </div>
    );
}
