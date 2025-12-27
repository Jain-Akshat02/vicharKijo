import {databases} from "./config";
import createAnswerTable from "./answer.collection";
import createQuestionTable from "./question.collection";
import createCommentTable from "./comment.collection";
import {db} from "../name";

export default async function createDatabase() {
    try {
        // Try to get the database to check if it exists
        await databases.get(db);
        console.log("db connected");
    } catch (error: any) {
       try {
        await databases.create(db,db);
        console.log("db created");
        await Promise.all([
            createQuestionTable(),
            createAnswerTable(),
            createCommentTable()
        ])
        console.log("table created");
        
       } catch (error) {
        console.log("---error---",);
        
       }
    }
    return databases
}

