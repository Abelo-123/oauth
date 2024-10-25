CREATE TABLE IF NOT EXISTS "books" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"By" varchar(300) NOT NULL,
	"AuthorName" varchar(300) NOT NULL,
	"BookName" varchar(300) NOT NULL
);
