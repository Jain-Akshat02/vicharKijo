import { tablesDB } from "./config";
import { Permission, Role } from "node-appwrite";
import { db, voteTable } from "../name";

export default async function createVoteTable() {
  try {
    await tablesDB.createTable({
      databaseId: db,
      tableId: voteTable,
      name: voteTable,
      permissions: [
        Permission.read(Role.any()),
        Permission.create(Role.users()),
        Permission.update(Role.users()),
        Permission.delete(Role.users()),
      ],
    });
    console.log("✅ Vote table created successfully!");
  } catch (error: any) {
    if (error.code === 409) {
        console.log("ℹ️ Vote table already exists.");
    } else {
        console.error("❌ Error creating vote table:", error);
    }
  }

  try {
    await Promise.all([
      tablesDB.createEnumColumn({
        databaseId: db,
        tableId: voteTable,
        key: "type",
        elements: ["question", "answer"],
        required: true,
      }),
      tablesDB.createStringColumn({
        databaseId: db,
        tableId: voteTable,
        key: "typeId",
        size: 50,
        required: true,
      }),
      tablesDB.createEnumColumn({
        databaseId: db,
        tableId: voteTable,
        key: "voteStatus",
        elements: ["upvoted", "downvoted"],
        required: true,
      }),
      tablesDB.createStringColumn({
        databaseId: db,
        tableId: voteTable,
        key: "votedById",
        size: 50,
        required: true,
      }),
    ]);
    console.log("✅ Vote columns created successfully!");
  } catch (error: any) {
    if (error.code === 409) {
        console.log("ℹ️ Some vote columns already exist.");
    } else {
        console.error("❌ Error creating vote columns:", error);
    }
  }
}
