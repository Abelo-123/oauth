CREATE TABLE IF NOT EXISTS "Users" (
	"id" integer PRIMARY KEY NOT NULL,
	"full_name" varchar(255)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "authors" (
	"id" integer PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "books" (
	"id" integer PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"author" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "names" (
	"id" integer PRIMARY KEY NOT NULL,
	"name" varchar(200)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "phone" (
	"id" integer PRIMARY KEY NOT NULL,
	"phone" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "todo" (
	"id" integer PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"Title" text NOT NULL,
	"Description" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" integer PRIMARY KEY NOT NULL,
	"username" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	"verificationToken" uuid,
	"isVerified" boolean DEFAULT false
);
