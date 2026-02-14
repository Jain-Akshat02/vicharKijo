// src/models/server/syncClerkUser.ts
import { databases,tablesDB } from "@/models/server/config";
import { ID, Query } from "appwrite";
import { db,userTable } from "../name";
   import { clerkClient } from '@clerk/nextjs/server';
const DATABASE_ID = db;
const USERS_COLLECTION_ID = "users"; // or whatever you name it

export async function syncClerkUser(userId?: string, user?: any) {
  console.log("🔍 syncClerkUser called with userId:", userId);
  
  if(!userId) {
    console.log("❌ No userId provided, exiting");
    return;
  }
  try {
    const client = await clerkClient();

    const user = await client.users.getUser(userId);

    const primaryEmail = user.emailAddresses.find(
      (e) => e.id === user.primaryEmailAddressId
    )?.emailAddress;

    console.log("📧 Email:", primaryEmail);
    console.log("👤 Username:", user.username);
    console.log("📝 Name:", user.firstName, user.lastName);
    let username = user.username;
        if (!username) {
     const emailBase = primaryEmail?.split('@')[0];
     // Remove spaces, special chars, keep only letters/numbers
     const cleanBase = emailBase?.replace(/[^a-zA-Z0-9]/g, '');
     const randomNum = Math.floor(1000 + Math.random() * 9000);
     username = `${cleanBase}_${randomNum}`;
   }
    const payload = {
      userId: user.id,
      email: primaryEmail,
      role: "user",
      createdAt: new Date().toISOString(),
      username: username
    }
    // Check if user already exists
try {
  const existingUsers = await tablesDB.listRows({
    databaseId: db,
    tableId: userTable,
    queries: [
    Query.equal("userId", user.id) 
  ]
  });
  
  if (existingUsers.rows && existingUsers.rows.length > 0) {
    console.log("✅ User already exists in Appwrite, skipping");
    return; // User already synced
  }
  // Create user in Appwrite
try {
  await tablesDB.createRow({
    databaseId: db,
    tableId: userTable,
    rowId: ID.unique(),     
    data: payload    
  });
  console.log("✅ User saved to Appwrite!");
} catch (error) {
  console.error("❌ Error saving user to Appwrite:", error);
}
} catch (error) {
  console.log("⚠️ Error checking existing user:", error);
  // Continue anyway - might be first time
}
  } catch (error) {
    console.log("❌ Error in syncClerkUser:", error);
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
