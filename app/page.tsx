"use client"
import {signIn} from "next-auth/react"
import { useEffect } from "react"


export default function Home() {

 
  const handleGoogle = async () => {
        await signIn("google", {redirect: false, callbackUrl:"/dashboard"})
        
  }

  useEffect(() => {
    console.log('NEXTAUTH_SECRET:', process.env.NEXTAUTH_SECRET); // For debugging purposes

  }, [])
  return (
    <>
    <button onClick={handleGoogle}>google</button>
    
    </>
  );
}
