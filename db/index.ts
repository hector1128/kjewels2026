import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

// Getting connection string from the .env file
const connectionString = process.env.DATABASE_URL!

// Setting up the connection for Supabase (Transaction mode)
const client = postgres(connectionString, { prepare: false })

// Initializing Drizzle and exporting it
export const db = drizzle(client);