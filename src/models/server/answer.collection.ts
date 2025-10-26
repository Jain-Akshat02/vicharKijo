import {databases,tablesDB} from "./config";
import { Permission,TablesDB } from "node-appwrite";
import {db,questionCollection,answerCollection} from "../name";


export default async function createAnswerTable(){
    await tablesDB.createTable({
        databaseId: db,
        tableId: answerCollection,
        name:answerCollection,
        permissions: [
            Permission.read("any"),
            Permission.read("users"),
            Permission.create("any"),
            Permission.update("any"),
            Permission.delete("any")
        ] 

    })
}