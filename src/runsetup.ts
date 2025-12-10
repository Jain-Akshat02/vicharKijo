import createDatabase from "./models/server/database.setup";
import createQuestionTable from "./models/server/question.collection";
import createAnswerTable from "./models/server/answer.collection";
import createCommentTable from "./models/server/comment.collection";

async function runSetup() {
  try {
    console.log("🚀 Starting database setup...");
    
    // Step 1: Create database if it doesn't exist
    await createDatabase();
    
    // Step 2: Create all tables
    await createQuestionTable();
    await createAnswerTable();
    await createCommentTable();
    
    console.log("✅ All setup completed successfully!");
  } catch (error) {
    console.error("❌ Setup failed:", error);
    process.exit(1);
  }
}

runSetup();
