import { tablesDB } from "./config";
import { IndexType, Permission, Role } from "node-appwrite";
import { db, voteTable } from "../name";

export default async function createVoteTable() {
  try {
    await tablesDB.createTable({
      databaseId: db,
      name: "votes",
      tableId: voteTable,
      permissions: [
        Permission.create(Role.users()),
        Permission.read(Role.any()),
        Permission.update(Role.users()),
        Permission.delete(Role.users()),
      ],
    });
    console.log("✅ Votes table created");
  } catch (error: any) {
    // Table already exists - that's okay, continue to create columns
    if (error?.code === 409 || error?.message?.includes('already exists')) {
      console.log("✅ Votes table already exists");
    } else {
      console.error("❌ Error creating votes table:", error);
      throw error;
    }
  }
  
  // Create columns - wrap each in try-catch to handle "already exists" errors
  try {
    await tablesDB.createStringColumn({
      databaseId: db,
      tableId: voteTable,
      key: "userId",
      size: 50,
      required: true,
    });
  } catch (error: any) {
    if (error?.code === 409 || error?.message?.includes('already exists')) {
      // Column already exists, skip
    } else {
      throw error;
    }
  }
  
  try {
    await tablesDB.createEnumColumn({
      databaseId: db,
      tableId: voteTable,
      key: "type",
      elements: ["up", "down"],
      required: true,
    });
  } catch (error: any) {
    if (error?.code === 409 || error?.message?.includes('already exists')) {
      // Column already exists, skip
    } else {
      throw error;
    }
  }
  
  try {
    await tablesDB.createEnumColumn({
      databaseId: db,
      tableId: voteTable,
      key: "targetType",
      elements: ["question", "answer"],
      required: true,
    });
  } catch (error: any) {
    if (error?.code === 409 || error?.message?.includes('already exists')) {
      // Column already exists, skip
    } else {
      throw error;
    }
  }
  
  try {
    await tablesDB.createStringColumn({
      databaseId: db,
      tableId: voteTable,
      key: "targetId",
      size: 50,
      required: true,
    });
  } catch (error: any) {
    if (error?.code === 409 || error?.message?.includes('already exists')) {
      // Column already exists, skip
    } else {
      throw error;
    }
  }
  
  console.log("✅ Vote table columns verified");
}
