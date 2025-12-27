import createDatabase from "./models/server/dbSetup";
import createQuestionTable from "./models/server/question.collection";
import createAnswerTable from "./models/server/answer.collection";
import createCommentTable from "./models/server/comment.collection";
import createVoteTable from "./models/server/vote.collection";

async function runSetup() {
  try {
    console.log("🚀 Starting database setup...");
    
    // Step 1: Create database if it doesn't exist
    await createDatabase();
    
    // Step 2: Create all tables and columns
    await Promise.all([
      createQuestionTable(),
      createAnswerTable(),
      createCommentTable(),
      createVoteTable()
    ]);
    
    console.log("✅ All setup completed successfully!");
  } catch (error) {
    console.error("❌ Setup failed:", error);
    process.exit(1);
  }
}

runSetup();
