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
        console.log("✅ User table created");
    } catch (error: any) {
        // Table already exists - that's okay, continue to create columns
        if (error?.code === 409 || error?.message?.includes('already exists')) {
            console.log("✅ User table already exists");
        } else {
            console.error("❌ Error creating user table:", error);
            throw error;
        }
    }
    
    //columns
    try {
        await tablesDB.createStringColumn({
            databaseId: db,
            tableId: userTable,
            key:"email",
            size:320,
            required: true
        });
    } catch (error: any) {
        if (error?.code === 409 || error?.message?.includes('already exists')) {
            // Column already exists, skip
        } else {
            throw error;
        }
    }
    
    try {
        await tablesDB.createStringColumn({
            databaseId:db,
            tableId:userTable,
            key:"userId",
            size:320,
            required: true
        });
    } catch (error: any) {
        if (error?.code === 409 || error?.message?.includes('already exists')) {
            // Column already exists, skip
        } else {
            throw error;
        }
    }
    
    try {
        await tablesDB.createStringColumn({
            databaseId: db,
            tableId: userTable,
            key: "role",
            size: 50,
            required: true,
        });
    } catch (error: any) {
        if (error?.code === 409 || error?.message?.includes('already exists')) {
            // Column already exists, skip
        } else {
            throw error;
        }
    }
    
    try {
        await tablesDB.createDatetimeColumn({
            databaseId: db,
            tableId: userTable,
            key: "createdAt",
            required: true,
        });
    } catch (error: any) {
        if (error?.code === 409 || error?.message?.includes('already exists')) {
            // Column already exists, skip
        } else {
            throw error;
        }
    }

    console.log("✅ User table columns verified");
}