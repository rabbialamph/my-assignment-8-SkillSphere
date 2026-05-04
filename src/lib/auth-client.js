import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: "https://my-assignment-8-skill-sphere-6124.vercel.app"
});

export const {
  signIn,
  signUp,
  signOut,
  useSession,
} = authClient;