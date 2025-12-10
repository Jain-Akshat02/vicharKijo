import {databases} from "./config";
import {db} from "../name";

export default async function createDatabase() {
    try {
        // Try to get the database to check if it exists
        await databases.get(db);
        console.log("✅ Database already exists!");
        return;
    } catch (error: any) {
        // If database doesn't exist (404 or similar), create it
        if (error.code === 404 || error.message?.includes("not found")) {
            try {
                await databases.create(db, db);
                console.log("✅ Database created successfully!");
            } catch (createError) {
                console.error("❌ Error creating database:", createError);
                throw createError;
            }
        } else {
            console.error("❌ Error checking database:", error);
            throw error;
        }
    }
}

