import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({
        user:"harkirat",
        email:"harkirat@example.com"
    });
}

export function POST(){
    return NextResponse.json({
        user:"harkirat",
        email:"harkirat@example.com"
    });
}

export function PUT(){
    return NextResponse.json({
        user:"harkirat",
        email:"harkirat@example.com"
    });
}

export function DELETE(){
    return NextResponse.json({
        user:"harkirat",
        email:"harkirat@example.com"
    });
}

export default function UserHandler(){
    return NextResponse.json({message:"Hello from User API route!"});
}