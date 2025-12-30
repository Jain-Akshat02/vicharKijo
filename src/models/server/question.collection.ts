import { tablesDB } from "./config";
import { IndexType, Permission, Role } from "node-appwrite";
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
  } catch (error) {
    console.error("❌ Error creating question table:", error);
    throw error;
  }
  await tablesDB.createStringColumn({
    databaseId: db,
    tableId: questionTable,
    key: "title",
    size: 255,
    required: true,
  });
  await tablesDB.createStringColumn({
    databaseId: db,
    tableId: questionTable,
    key: "content",
    size: 10000,
    required: true,
  });

  await tablesDB.createStringColumn({
    databaseId: db,
    tableId: questionTable,
    key: "authorId",
    size: 50,
    required: true,
  });

  await tablesDB.createDatetimeColumn({
    databaseId: db,
    tableId: questionTable,
    key: "attachmentId",
    required: false,
  });
  console.log("✅ Columns created for questions table");


  //create index
  await tablesDB.createIndex({
    databaseId: db,
    tableId: questionTable,
    key: "title", // Replace with your field names
    type: IndexType.Fulltext,
    columns: ["title"],
    orders: ["asc", "desc"],
  });
  await tablesDB.createIndex({
    databaseId: db,
    tableId: questionTable,
    key: "content", // Replace with your field names
    type: IndexType.Fulltext,
    columns: ["content"], 
    orders: ["asc", "desc"],
  });
}
