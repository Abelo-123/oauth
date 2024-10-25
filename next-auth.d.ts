// next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
    interface User {
        nm?: string; // Add your custom property here
    }

    interface Session {
        user: User; // Ensure the session user has the updated User type
    }
}
