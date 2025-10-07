//this is for client side authentication

/* 
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "username", type: "text", placeholder: "you@example.com" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                const username = credentials?.username;
                const password = credentials?.password;

                // Always return a user (no validation)
                const user = {
                    id: "1",
                    name: "Test User",
                    email: "user@example.com"
                };

                console.log("Username:", username);
                console.log("Password:", password);
                if (user)
                    return user;      
                else
                    return null;
            }
        }),
        GitHubProvider({
            clientId: "fdwfwe",
            clientSecret: "efewfewfewf"
        }),
        GoogleProvider({
            clientId: "fdwfwe",
            clientSecret: "efewfewfewf"
        })
    ]
});

export { handler as GET, handler as POST };
*/



// this is for server side authentication
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                return {
                    name: "Ayush",
                    id: "1",
                    email: "user@gmail.com"
                }
            },
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
});

export { handler as GET, handler as POST };