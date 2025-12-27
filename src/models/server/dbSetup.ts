import { db } from "../name";
import { tablesDB } from "./config";

export default async function createDatabase() {
  try {
    await tablesDB.get({ databaseId: db });
    console.log("✅ Database connected");
  } catch (error) {
    try {
      await tablesDB.create({ databaseId: db, name: db });
      console.log("✅ Database created");
    } catch (createError) {
      console.error("❌ Error creating database:", createError);
      throw createError;
    }
  }
  return tablesDB;
}
