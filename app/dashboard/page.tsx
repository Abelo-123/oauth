"use client"
import { useSession } from "next-auth/react";
import {signOut} from "next-auth/react"
import { useState, useEffect } from "react";
import axios from "axios"

export default function Dashboard() {

    const [BookName, setBookname] = useState<string>("")
    const [AuthorName, setAuthorname] = useState<string>("")
   
    const [books, setBooks] =  useState<{ By: string; BookName: string; AuthorName: string }[]>([]); // Define the type for book
    const { data: session, status } = useSession();
    const [isModalOpen, setIsModalOpen] = useState(false); // Add state for modal visibility

    const toggleModal = () => { // Add function to toggle modal
        setIsModalOpen(!isModalOpen);
    }

    const handleSignout = async () => {
        await signOut({callbackUrl:"/"})
    }

    useEffect(() => {

        const fetchBooks = async () => {
            const response = await axios("api/books/getBooks")
            const {data} = await response.data;
            setBooks(data)
        }
        fetchBooks()
    }, [])

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
      
        try {
           
            const responseB = await axios.post("api/books/addBook", {
                by: session?.user?.name,
                BookName,
                AuthorName
            })
            const {data} = await responseB.data;
            if(responseB.status === 200) {
                setBooks((prevBooks) => [
                    ...prevBooks, 
                    { By: data.by, BookName: data.BookName, AuthorName: data.AuthorName }
                ]);
            setBookname("")
            setAuthorname("")
            setIsModalOpen(false)
            } else {
                console.log(responseB)
            }
        } catch(error) {
            console.error(error)
        }
        

        
    }

    if (status === "loading") {
        return <p>Loading...</p>;
      }

    return (
        <>
        <div className="w-screen h-screen flex flex-col  bg-red-100">
                <button className="px-12 bg-red-300 p-4  absolute bottom-0 right-0"  onClick={toggleModal}>Add Book</button>
                {isModalOpen && ( // Render modal conditionally
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-4 rounded">
                            <h2 className="text-lg font-bold ">Add a New Book</h2>
                            <form className="grid gap-2" onSubmit={handleSubmit}>
                                <input type="text" className="border-2 p-2 w-96" placeholder="Author" value={AuthorName} onChange={(e) => setAuthorname(e.target.value)}/>
                                <input type="text" className="border-2  p-2 w-96" placeholder="Books" value={BookName} onChange={(e) => setBookname(e.target.value)}/>
                                <button type="submit" className="bg-red-300 p-4 px-auto">Submit</button>
                            </form>
                            <button onClick={toggleModal} className="mt-4 bg-red-300 p-2">Close</button>
                        </div>
                    </div>
                )}
                <div className="bg-red-200 flex justify-between p-2">
                    <button className="px-12 bg-red-300 p-4"  onClick={handleSignout}>Sign Out</button>
                    <p className="my-auto mx-4">Welcome <b>{session?.user?.name}</b></p>
                </div>
                
                <div className="grid gap-2 lg:grid-cols-4 grid-cols-2 p-12 lg:px-36 h-fit bg-red-300">
                   
                    {books.map((items, index) => (
                        <div key={index} className="p-4 bg-red-200 h-fit">
                            <p>PostedBy {items.By}</p>
                            <p>BookName {items.BookName}</p>
                            <p>AuthorName {items.AuthorName}</p>
                        </div>
                    ))}
                </div>
        </div>
        </>
    );
}