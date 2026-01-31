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
  } catch (error) {
    console.log("Error creating votes table ");
    console.error(error);
  }
  finally{
    console.log("✅ Votes table creation process completed");
  }
  await tablesDB.createStringColumn({
    databaseId: db,
    tableId: voteTable,
    key: "userId",
    size: 50,
    required: true,
  });
  await tablesDB.createEnumColumn({
    databaseId: db,
    tableId: voteTable,
    key: "type",
    elements: ["up", "down"],
    required: true,
  });
  await tablesDB.createEnumColumn({
    databaseId: db,
    tableId: voteTable,
    key: "targetType",
    elements: ["question", "answer"],
    required: true,
  });
  await tablesDB.createStringColumn({
    databaseId: db,
    tableId: voteTable,
    key: "targetId",
    size: 50,
    required: true,
  });
  console.log("✅ Vote table columns created");

}
