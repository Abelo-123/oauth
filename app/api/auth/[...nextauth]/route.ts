import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
import {db} from "@/app/src/db.js"
import { users } from "@/schema.js";
import {eq} from "drizzle-orm"

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        })
    ],
    pages: {
        signIn: "/",
        error: "/"
    },
    callbacks: {
        async signIn({user}) {

            try {
                const existingUser = await db.select().from(users).where(eq(users.email, user.email!)).limit(1);
                if (existingUser.length === 0) {
                    // Redirect with a custom error message
                    await db.insert(users).values({ 
                       // Ensure you have a way to generate a unique ID
                        username: user.name!, 
                        email: user.email!, 
                         // Provide a default password orhandle it accordingly
                    });  
                }
                 
            } catch(error) {
                console.error(error)
                
            }
            return true;
        },
        async session({session}) {
            if (session && session.user) {
                session.user.nm = "ass"; // Assign the value directly
            }
            return session;
        }
    }
})

export {handler as GET, handler as POST}