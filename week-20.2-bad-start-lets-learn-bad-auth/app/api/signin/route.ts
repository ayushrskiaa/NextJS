import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';



export async function POST(req: NextRequest){

    const body=await req.json();

    const username=body.username;
    const password=body.password;
    // Validate username and password (this is just a placeholder, implement your own logic)

    const userId=1;
    const token=jwt.sign({userId},'secret');

    return NextResponse.json({token});
}