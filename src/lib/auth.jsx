import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const uri = process.env.AUTH_DB_URI;

if (!uri) {
  throw new Error("❌ AUTH_DB_URI is missing");
}

const client = new MongoClient(uri);

let db;

async function getDB() {
  if (!db) {
    await client.connect();
    db = client.db("better_auth_db_assignment8");
  }
  return db;
}

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,
  secret: process.env.BETTER_AUTH_SECRET,

  emailAndPassword: {
    enabled: true,
  },

  database: mongodbAdapter(await getDB(), {
    client,
  }),
});