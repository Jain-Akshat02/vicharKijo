import { tablesDB } from "./config";
import { Permission, Role } from "node-appwrite";
import { db, commentTable } from "../name";

export default async function createCommentTable() {
  try {
    await tablesDB.createTable({
      databaseId: db,
      tableId: commentTable,
      name: commentTable,
      permissions: [
        Permission.read(Role.any()),
        Permission.create(Role.users()),
        Permission.update(Role.users()),
        Permission.delete(Role.users()),
      ],
    });
    console.log("✅ Comment table created successfully!");
  } catch (error: any) {
    if (error.code === 409) {
        console.log("ℹ️ Comment table already exists.");
    } else {
        console.error("❌ Error creating comment table:", error);
    }
  }

  try {
    await Promise.all([
      tablesDB.createStringColumn({
        databaseId: db,
        tableId: commentTable,
        key: "content",
        size: 1000,
        required: true,
      }),
      tablesDB.createEnumColumn({
        databaseId: db,
        tableId: commentTable,
        key: "type",
        elements: ["question", "answer"],
        required: true,
      }),
      tablesDB.createStringColumn({
        databaseId: db,
        tableId: commentTable,
        key: "typeId",
        size: 50,
        required: true,
      }),
      tablesDB.createStringColumn({
        databaseId: db,
        tableId: commentTable,
        key: "authorId",
        size: 50,
        required: true,
      }),
    ]);
    console.log("✅ Comment columns created successfully!");
  } catch (error: any) {
    if (error.code === 409) {
        console.log("ℹ️ Some comment columns already exist.");
    } else {
        console.error("❌ Error creating comment columns:", error);
    }
  }
}
