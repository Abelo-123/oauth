"use client"
import { useSession } from "next-auth/react";
import {signOut} from "next-auth/react"

export default function Dashboard() {
    const { data: session, status } = useSession();

    const handleSignout = async () => {
        await signOut({callbackUrl:"/"})
    }
    if (status === "loading") {
        return <p>Loading...</p>;
      }
    return (
        <>
        <p>{session?.user?.name}</p>
            <button onClick={handleSignout}>signOut</button>
        </>
    );
}