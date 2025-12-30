import {tablesDB} from "./config";
import { Permission,Role } from "node-appwrite";
import {db,answerTable} from "../name";


export default async function createAnswerTable(){
    try {
        await tablesDB.createTable({
            databaseId: db,
            tableId: answerTable,
            name: answerTable,
            permissions: [
                Permission.read(Role.any()),
                Permission.create(Role.users()),
                Permission.update(Role.users()),
                Permission.delete(Role.users())
            ] 
        })
        console.log("✅ Answer table created successfully!");
    } catch(error) {
        console.error("❌ Error creating answer table:", error);
        throw error;
    }

    
}