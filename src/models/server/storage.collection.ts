import { Client, Storage, Permission, Role, Compression } from "node-appwrite";
import { questionAttachmentBucket } from "../name";
import env from "@/app/env";
const client = new Client()
  .setEndpoint(env.appwrite.endpoint)
  .setProject(env.appwrite.projectId)
  .setKey(env.appwrite.apiKey);

const storage = new Storage(client);

export async function createStorageBucket() {
  if(!await storage.getBucket("attachments")){await storage.createBucket({
  bucketId: "attachments",
  name: "Attachments",
  permissions: [
    Permission.read(Role.any()),
    Permission.create(Role.users()),
    Permission.delete(Role.users())
  ],
  fileSecurity: false,
  enabled: true,
  maximumFileSize: 20_000_000, // 20 MB
  allowedFileExtensions: ["jpg", "jpeg", "png", "pdf"],
  compression: Compression.None,
  encryption: false,
  antivirus: false
});}
else{
  console.log("✅ Storage bucket already exists");
}
  console.log("✅ Storage bucket created");
}
