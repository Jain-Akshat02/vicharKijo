import {tablesDB} from "./config";
import { Permission,Role } from "node-appwrite";
import {db,commentTable} from "../name";


export default async function createCommentTable(){
    try {
        await tablesDB.createTable({
            databaseId: db,
            tableId: commentTable,
            name: commentTable,
            permissions: [
                Permission.read(Role.any()),
                Permission.create(Role.users()),
                Permission.update(Role.users()),
                Permission.delete(Role.users())
            ] 
        })
        console.log("✅ Comment table created successfully!");
    } catch(error) {
        console.error("❌ Error creating comment table:", error);
        throw error;
    }
}