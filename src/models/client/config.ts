import env from "@/app/env"
import { Client, Account,Avatars,Storage,TablesDB } from "appwrite";

const client = new Client();

client
    .setEndpoint(env.appwrite.endpoint)
    .setProject(env.appwrite.projectId);

const tablesDB = new TablesDB(client);
const account = new Account(client);
const avatars = new Avatars(client);
const storage = new Storage(client);

// const tablesDB = new TablesDB(client);
export { client,account,avatars,storage,tablesDB }