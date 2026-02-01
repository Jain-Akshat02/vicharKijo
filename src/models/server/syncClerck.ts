// src/models/server/syncClerkUser.ts
import { auth, currentUser } from "@clerk/nextjs/server";
import { databases } from "@/models/server/config";
import { ID, Query } from "appwrite";
import { db } from "../name";

const DATABASE_ID = db;
const USERS_COLLECTION_ID = "users"; // or whatever you name it

export async function syncClerkUser(auth: any) {
  // Use the auth object passed from middleware instead of calling auth()
  const authData = await auth();
  console.log("🔍 Auth Data:", authData);
  
  const { userId }: any = auth();
  if (!userId) return;

  const user = await currentUser();
  if (!user) return;

  const email = user.emailAddresses[0]?.emailAddress;

  // 1️⃣ Check if user already exists in Appwrite
  const existing = await databases.listDocuments(
    DATABASE_ID,
    USERS_COLLECTION_ID,
    [Query.equal("clerkUserId", userId)]
  );

  if (existing.total > 0) {
    return; // user already synced
  }

  // 2️⃣ Create user in Appwrite
  await databases.createDocument(
    DATABASE_ID,
    USERS_COLLECTION_ID,
    ID.unique(),
    {
      clerkUserId: userId,
      email,
      role: "user",
      isActive: true,
      createdAt: new Date().toISOString(),
    }
  );
}
