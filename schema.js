import { pgTable, varchar, boolean, uuid } from "drizzle-orm/pg-core";

export const users = pgTable('user', {
    id: uuid('id').primaryKey().defaultRandom(), // Primary key as UUID
    username: varchar('username', { length: 255 }).notNull(), // Required field
    email: varchar('email', { length: 255 }).notNull(), // Required field
    password: varchar('password', { length: 255 }), // Optional field, default is nullable
    verificationToken: uuid("verificationToken"), // Optional field, default is nullable
    isVerified: boolean("isVerified").default(false), // Default is false and optional
});


export const books = pgTable("books", {
    id: uuid('id').primaryKey().defaultRandom(),
    By: varchar('By', {length:300}).notNull(),
    AuthorName: varchar('AuthorName', {length:300}).notNull(),
    BookName: varchar('BookName', {length:300}).notNull(),
})