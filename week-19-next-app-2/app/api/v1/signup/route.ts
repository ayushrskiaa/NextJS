import { NextRequest, NextResponse } from "next/server";
import prismaClient from "../../../lib/db";

// import UserModel  from "../../../lib/db";    

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();

        const user = await prismaClient.user.create({
            data: {
                username: data.username,
                password: data.password
            }
        });

        // UserModel.create({username: data.username, password: data.password}).then((doc: IUser) => {
        //     console.log('User saved to MongoDB:', doc);
        // })
        // .catch((err: Error) => {
        //     console.error('Error saving user to MongoDB:', err);
        // });

        console.log('User created:', { id: user.id, username: user.username });

        return NextResponse.json({
            message: "You have been signed up successfully",
            userId: user.id
        }, { status: 201 });

    } catch (error: any) {
        console.error('Signup error:', error);

        return NextResponse.json({
            message: "Internal server error"
        }, { status: 500 });
    }
}

export async function GET(req: NextRequest) {
    try {
        const users = await prismaClient.user.findMany({
            select: {
                id: true,
                username: true,
                password: true
            }
        });

        return NextResponse.json({
            users
        });
    } catch (error) {
        console.error('Get users error:', error);
        return NextResponse.json({
            message: "Internal server error"
        }, { status: 500 });
    }
}