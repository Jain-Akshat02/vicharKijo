import {tablesDB} from "./config";
import createAnswerTable from "./answer.collection";
import createQuestionTable from "./question.collection";
import createCommentTable from "./comment.collection";
import {db} from "../name";

export default async function createDatabase() {
    try {
        // Try to list tables to check if database exists
        await tablesDB.listTables(db);
        console.log("db connected");
    } catch (error: any) {
       try {
        // Create database using create method
        await tablesDB.create({
            databaseId: db,
            name: db
        });
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
    return tablesDB
}

