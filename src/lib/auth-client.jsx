import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: "https://my-assignment-8-skill-sphere-b4yb.vercel.app",
});

export const {
  signIn,
  signUp,
  signOut,
  useSession,
} = authClient;