"use client"
import {signIn} from "next-auth/react"
import { useState } from "react"


export default function Home() {

  const [load, setLoad] = useState(false) 

  const handleGoogle = async () => {
        await signIn("google", {redirect: false, callbackUrl:"/dashboard"})
        setLoad(!load)
  }

 
  return (
    <>
    <div className="h-screen w-screen grid bg-red-100 place-content-center">
      <button  className={load ? "bg-red-200 p-4 px-12" : "bg-red-400 p-4 px-12"} disabled={load} onClick={handleGoogle}>google</button>
    </div>
    </>
  );
}
