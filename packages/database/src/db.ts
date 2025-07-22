import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

// Create the connection
const connectionString = process.env.DATABASE_URL || 'postgresql://user:password@localhost:5432/4420courts';

const client = postgres(connectionString);
export const db = drizzle(client, { schema });

// Export schema for use in apps
export { schema };