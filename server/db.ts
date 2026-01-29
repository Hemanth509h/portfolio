import { MongoClient, Db } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error(
    "MONGODB_URI must be set. Please provide your MongoDB connection string.",
  );
}

const client = new MongoClient(process.env.MONGODB_URI);

let db: Db;

export async function connectToDatabase(): Promise<Db> {
  if (db) return db;
  
  await client.connect();
  db = client.db();
  console.log("Connected to MongoDB");
  return db;
}

export async function getDb(): Promise<Db> {
  if (!db) {
    return await connectToDatabase();
  }
  return db;
}

export { client };
