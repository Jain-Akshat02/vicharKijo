import { tablesDB } from "./config";
import { IndexType, Permission, RelationMutate, Role } from "node-appwrite";
import { db, answerTable, questionTable } from "../name";
import { RelationshipType } from 'node-appwrite';

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
  } catch (error) {
    console.error("❌ Error creating answer table:", error);
    throw error;
  }
  //columns
  await tablesDB.createRelationshipColumn({
    databaseId: db,
    tableId: answerTable,
    relatedTableId: questionTable,
    key: "question",
    twoWay: false,
    type: RelationshipType.ManyToOne,
    onDelete: RelationMutate.Cascade
  })
  await tablesDB.createStringColumn({
    databaseId: db,
    tableId: answerTable,
    key: "authorId",
    size: 50,
    required: true,
  });
  await tablesDB.createStringColumn({
    databaseId: db,
    tableId: answerTable,
    key: "questionId",
    size: 50,
    required: true,
  });
  await tablesDB.createStringColumn({
    databaseId: db,
    tableId: answerTable,
    key: "content",
    size: 10000,
    required: true,
  });
  await tablesDB.createDatetimeColumn({
    databaseId: db,
    tableId: answerTable,
    key: "createdAt",
    required: true,
  });
  await tablesDB.createIntegerColumn({
    databaseId: db,
    tableId: answerTable,
    key: "score",
    required: true,
    min: -100000,
    max: 100000,
  });

  console.log("✅ Columns created for answers table");
//create indices

  await tablesDB.createIndex({
    databaseId: db,
    tableId: answerTable,
    key: "authorId",
    type: IndexType.Key,
    columns: ["authorId"],
  });
  await tablesDB.createIndex({
    databaseId: db,
    tableId: answerTable,
    key: "questionId",
    type: IndexType.Key,
    columns: ["questionId"],
  });
}
