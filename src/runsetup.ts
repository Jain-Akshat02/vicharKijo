
import setupQuestionTable from "./models/server/question.collection";

setupQuestionTable()
  .then(() => console.log("✅ Done"))
  .catch(console.error);
