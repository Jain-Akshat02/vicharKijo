import { tablesDB } from "./config";
import { Permission, Role } from "node-appwrite";
import { db, questionTable } from "../name";

export default async function createQuestionTable() {
  try {
    await tablesDB.createTable({
      databaseId: db,
      name: "questions",
      tableId: questionTable,
      permissions: [
        Permission.create(Role.users()),
        Permission.read(Role.any()),
        Permission.update(Role.users()),
        Permission.delete(Role.users()),
      ],
    });
    console.log("✅ Question table created successfully!");
  } catch (error: any) {
    if (error.code === 409) {
        console.log("ℹ️ Question table already exists.");
    } else {
        console.error("❌ Error creating question table:", error);
    }
  }

  try {
    // Create columns
    await Promise.all([
      tablesDB.createStringColumn({
        databaseId: db,
        tableId: questionTable,
        key: "title",
        size: 100,
        required: true,
      }),
      tablesDB.createStringColumn({
        databaseId: db,
        tableId: questionTable,
        key: "content",
        size: 10000,
        required: true,
      }),
      tablesDB.createStringColumn({
        databaseId: db,
        tableId: questionTable,
        key: "authorId",
        size: 50,
        required: true,
      }),
      tablesDB.createStringColumn({
        databaseId: db,
        tableId: questionTable,
        key: "tags",
        size: 50,
        required: true,
        array: true,
      }),
      tablesDB.createStringColumn({
        databaseId: db,
        tableId: questionTable,
        key: "attachmentId",
        size: 50,
        required: false,
      }),
    ]);
    console.log("✅ Question columns created successfully!");
  } catch (error: any) {
    if (error.code === 409) {
        console.log("ℹ️ Some question columns already exist.");
    } else {
        console.error("❌ Error creating question columns:", error);
    }
  }
}
