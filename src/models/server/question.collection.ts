import {tablesDB} from "./config";
import { Permission,Role } from "node-appwrite";
import {db,questionTable} from "../name";


export default async function createQuestionTable(){
    await tablesDB.createTable({
      databaseId: db,
      name: "questions",
      tableId: questionTable,
      permissions: [
        Permission.create(Role.users()),
        Permission.read(Role.any()),
      ]
      
    })


}