// "use client" // This makes it a Client Component


// import { useEffect, useState } from "react";

import axios from "axios";
// import { set } from "mongoose";

export default async function ProfilePage() {
    // const [profilePicture, setProfilePicture] = useState<string | null>(null);

    // useEffect(() => {
    //     axios.get("http://localhost:3001/api/profile", {
    //         headers: {
    //             authorization: localStorage.getItem("token")
    //         }
    //     }).then((res) => {
    //         setProfilePicture(res.data.avatarUrl);
    //     });
    // }, []);

// in server side renderring local storage is not available so we have to use cookies or any other method to store the token

    const res = await axios.get("http://localhost:3001/api/profile", {
        headers: {
            authorization: localStorage.getItem("token")
        }
    })
    const profilePicture = res.data.avatarUrl;

    return (
        <div>
            {profilePicture ? <img src={profilePicture} alt="Profile Picture" /> : <p>No Profile Picture</p>}
        </div>
    )

}
