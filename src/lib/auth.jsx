import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.AUTH_DB_URI);

const db = client.db('better_auth_db_assignment8');

export const auth = betterAuth({
  
  baseURL: process.env.BETTER_AUTH_URL, 
  secret: process.env.BETTER_AUTH_SECRET,

  emailAndPassword: { 
    enabled: true, 
   }, 

    database: mongodbAdapter(db, {

    client
  }),
});