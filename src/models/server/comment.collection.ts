import { tablesDB } from "./config";
import { Permission, Role } from "node-appwrite";
import { db, commentTable, answerTable } from "../name";
import { RelationshipType, RelationMutate } from "node-appwrite";

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
  } catch (error) {
    console.error("❌ Error creating comment table:", error);
    throw error;
  }
  //colums
  await tablesDB.createStringColumn({
    databaseId: db,
    tableId: commentTable,
    key: "content",
    size: 10000,
    required: true,
  });
  await tablesDB.createStringColumn({
    databaseId: db,
    tableId: commentTable,
    key: "authorId",
    size: 50,
    required: true,
  });
  await tablesDB.createRelationshipColumn({
    databaseId: db,
    tableId: commentTable,
    relatedTableId: answerTable,
    key: "answer",
    twoWay: false,
    type: RelationshipType.ManyToOne,
    onDelete: RelationMutate.Cascade,
  });
  await tablesDB.createDatetimeColumn({
    databaseId: db,
    tableId: commentTable,
    key: "createdAt",
    required: true,
  });
  console.log("✅ Comment table created successfully!");
}
