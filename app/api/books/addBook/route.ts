import { NextResponse } from "next/server"
import { db } from "@/app/src/db.js";
import { books } from "@/schema.js";


export async function POST(req: Request) {
    const {by, BookName, AuthorName} = await req.json()
    const news = {by, BookName, AuthorName};
    try {
        await db.insert(books).values({By: by, BookName, AuthorName})
        return NextResponse.json({data: news})
    } catch(error) {
        return NextResponse.json({data: error})
    }
}