import { databases, tablesDB } from "./config";
import createAnswerTable from "./answer.collection";
import createQuestionTable from "./question.collection";
import createCommentTable from "./comment.collection";
import createVoteTable from "./vote.collection";
import {db} from "../name";

export default async function createDatabase() {
  try {
    // 1) Ensure database exists
    try {
      await databases.get(db);
      console.log("✅ Database already exists:", db);
    } catch (error: any) {
      // If database is missing, create it
      if (error?.code === 404) {
        await databases.create(db, db);
        console.log("✅ Database created:", db);
      } else {
        console.error("❌ Error checking/creating database:", error);
        throw error;
      }
    }

    // 2) Ensure tables exist (each function logs and throws on failure)
    await Promise.all([
      createQuestionTable(),
      createAnswerTable(),
      createCommentTable(),
      createVoteTable()    ]);
    console.log("✅ Tables created / verified");
  } catch (error) {
    console.error("❌ createDatabase failed:", error);
  }

  return tablesDB;
}

