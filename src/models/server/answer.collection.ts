import { tablesDB } from "./config";
import { Permission, Role } from "node-appwrite";
import { db, answerTable } from "../name";

export default async function createAnswerTable() {
  try {
    await tablesDB.createTable({
      databaseId: db,
      tableId: answerTable,
      name: answerTable,
      permissions: [
        Permission.read(Role.any()),
        Permission.create(Role.users()),
        Permission.update(Role.users()),
        Permission.delete(Role.users()),
      ],
    });
    console.log("✅ Answer table created successfully!");
  } catch (error: any) {
    if (error.code === 409) {
        console.log("ℹ️ Answer table already exists.");
    } else {
        console.error("❌ Error creating answer table:", error);
    }
  }

  try {
    await Promise.all([
      tablesDB.createStringColumn({
        databaseId: db,
        tableId: answerTable,
        key: "content",
        size: 10000,
        required: true,
      }),
      tablesDB.createStringColumn({
        databaseId: db,
        tableId: answerTable,
        key: "questionId",
        size: 50,
        required: true,
      }),
      tablesDB.createStringColumn({
        databaseId: db,
        tableId: answerTable,
        key: "authorId",
        size: 50,
        required: true,
      }),
    ]);
    console.log("✅ Answer columns created successfully!");
  } catch (error: any) {
    if (error.code === 409) {
        console.log("ℹ️ Some answer columns already exist.");
    } else {
        console.error("❌ Error creating answer columns:", error);
    }
  }
}
