// src/models/server/syncClerkUser.ts
import { databases } from "@/models/server/config";
import { ID, Query } from "appwrite";
import { db } from "../name";

const DATABASE_ID = db;
const USERS_COLLECTION_ID = "users"; // or whatever you name it

export async function syncClerkUser(userId?: string, user?: any) {
  console.log("🔍 syncClerkUser called with userId:", userId);
  
  if(!userId) {
    console.log("❌ No userId provided, exiting");
    return;
  }
  
  if (!user) {
    console.log("❌ No user data provided");
    return;
  }

  try {
    console.log("✅ User data received!");
    const email = user.emailAddresses[0]?.emailAddress;
    console.log("📧 User email:", email);
    console.log("👤 Full user data:", {
      id: user.id,
      email: email,
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username
    });

  } catch (error) {
    console.log("❌ Error in syncClerkUser:", error);
  }
}
