// this is for client side authentication
/*
  This method uses Client Components and React hooks.
  - Uses useSession() to access session data on the client.
  - SessionProvider wraps the component for context.
  - signIn() and signOut() work instantly in the browser.
  - Use this for interactive/authenticated UI in the browser.
*/

/* 
"use client";

import { useSession, SessionProvider } from 'next-auth/react';
import { signOut } from "next-auth/react";
import { signIn } from "next-auth/react";
export default function Home() {
  return (
    <SessionProvider>
      <RealHome />
    </SessionProvider>
  );
}

function RealHome() {
  const session = useSession();
  console.log(session);
  return (
    <div>
      <div className=''>
        {session.status === "authenticated" ? <button onClick={() => signOut()}>LogOut</button> : <button onClick={() => signIn()}>SignIn</button>}
      </div>
      {JSON.stringify(session)}
    </div>
  );
}

*/



// this is for server side authentication
// This method uses Server Components and getServerSession().
// - Session is fetched on the server before rendering.
// - Use this for SSR, static pages, or API routes.
// - No React hooks; session is available at render time.

import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();
  console.log(session);
  return (
    <div>
      <div className=''>
        {session ? <button>LogOut</button> : <button>SignIn</button>}
      </div>
      {JSON.stringify(session)}
    </div>
  );
}