import { tablesDB } from "./config";
import { RelationshipType } from 'node-appwrite';
import { IndexType, Permission, RelationMutate, Role } from "node-appwrite";
import { userTable,db } from "../name";

export default async function createUserTable(){
    try {
        await tablesDB.createTable({
            databaseId: db,
            tableId: userTable,
            name: userTable,
            permissions: [
                Permission.read(Role.users())
            ]
        });
        console.log("---user table created---");
        
    } catch (error) {
        console.error("---error creating user table---", error);
    }
}