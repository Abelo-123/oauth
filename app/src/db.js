import {drizzle} from "drizzle-orm/postgres-js"
import postgres from "postgres"

const connectionString = "postgresql://postgres.bihqharjyezzxhsghell:newPass12311220yU@aws-0-us-east-1.pooler.supabase.com:6543/postgres";
const client = postgres(connectionString)
export const db = drizzle(client)