import {databases,tablesDB} from "./config";
import { Permission,TablesDB } from "node-appwrite";
import {db,questionCollection} from "../name";


export default async function createQuestionTable(){
    await tablesDB.createStringColumn({
      databaseId: db,
      tableId: questionCollection,
      key: "description",
      size: 1000,
      required: false,
      array: false,
    })


}