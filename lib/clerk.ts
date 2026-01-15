import { currentUser } from "@clerk/nextjs/server";

/**
 * Get the current authenticated user from Clerk
 */
export async function getCurrentUser() {
  const user = await currentUser();
  return user;
}
