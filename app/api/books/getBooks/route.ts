import { NextResponse } from "next/server";
import { db } from "@/app/src/db.js";
import { books } from "@/schema.js";

export async function GET() {
    const bookList = await db.select().from(books);
    return NextResponse.json({data: bookList})
}