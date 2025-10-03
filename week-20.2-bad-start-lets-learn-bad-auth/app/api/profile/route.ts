import {NextRequest, NextResponse} from "next/server";
import jwt from 'jsonwebtoken';

export async function GET(req: NextRequest){


    // const header=req.headers;
    // const authorizationHeader=header.get('Authorization');
    // const decoded=jwt.decode(authorizationHeader,"secret");
    // const userId=decoded.userId;

    // Fetch user profile from database (this is just a placeholder, implement your own logic)
    
    return NextResponse.json({
        avatarUrl:"https://i.pravatar.cc/150?img=3",
    })
}