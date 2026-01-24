import { Client, Storage, Permission, Role, Compression } from "node-appwrite";
import { questionAttachmentBucket } from "../name";
const client = new Client()
  .setEndpoint(process.env.APPWRITE_ENDPOINT!)
  .setProject(process.env.APPWRITE_PROJECT_ID!)
  .setKey(process.env.APPWRITE_API_KEY!);

const storage = new Storage(client);

export async function createStorageBucket() {
  await storage.createBucket({
  bucketId: "question-attachments",
  name: "Question Attachments",
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
});
await storage.createBucket({
    bucketId: "answer-attachments",
    name: "Answer Attachments",
    permissions: [
      Permission.read(Role.any()),
      Permission.create(Role.users()),
      Permission.delete(Role.users())
    ],
    fileSecurity: false,
    enabled: true,
    maximumFileSize: 20_000_000,
    allowedFileExtensions: ["jpg", "jpeg", "png", "pdf"],
    compression: Compression.None,
    encryption: false,
    antivirus: false
  });
 
  console.log("✅ Storage bucket created");
}
