import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({
        message: 'Hello from auth/module/route.js'
    });
}


// [...module] is a catch-all route in Next.js that captures all routes under /auth/*