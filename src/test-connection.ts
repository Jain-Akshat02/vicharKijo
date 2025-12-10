import env from "./app/env";
import { Client, Databases, TablesDB } from "node-appwrite";

async function testConnection() {
  console.log("🔍 Testing Appwrite connection...");
  console.log("Endpoint:", env.appwrite.endpoint);
  console.log("Project ID:", env.appwrite.projectId);
  console.log("API Key:", env.appwrite.apiKey ? "✅ Set" : "❌ Missing");
  
  const client = new Client();
  client
    .setEndpoint(env.appwrite.endpoint)
    .setProject(env.appwrite.projectId)
    .setKey(env.appwrite.apiKey);

  const databases = new Databases(client);
  const tablesDB = new TablesDB(client);

  try {
    // Test 1: List databases
    console.log("\n📋 Testing database connection...");
    const dbList = await databases.list();
    console.log("✅ Connection successful!");
    console.log(`Found ${dbList.databases.length} database(s):`);
    dbList.databases.forEach(db => {
      console.log(`  - ${db.name} (ID: ${db.$id})`);
    });

    // Test 2: Check if our database exists
    console.log("\n🔍 Checking for 'main-vicharkijo' database...");
    try {
      const db = await databases.get("main-vicharkijo");
      console.log("✅ Database 'main-vicharkijo' exists!");
      
      // Test 3: List tables in the database
      console.log("\n📋 Checking tables in database...");
      const tables = await tablesDB.listTables("main-vicharkijo");
      console.log(`Found ${tables.tables.length} table(s):`);
      tables.tables.forEach(table => {
        console.log(`  - ${table.name} (ID: ${table.$id})`);
      });
    } catch (error: any) {
      if (error.code === 404) {
        console.log("❌ Database 'main-vicharkijo' does not exist yet.");
        console.log("💡 Run the setup to create it: npm run setup or visit /api/setup");
      } else {
        throw error;
      }
    }
  } catch (error: any) {
    console.error("\n❌ Connection failed!");
    console.error("Error:", error.message);
    console.error("\n💡 Check your .env.local file has:");
    console.error("  - NEXT_PUBLIC_APPWRITE_HOST_URL");
    console.error("  - NEXT_PUBLIC_PROJECT_ID");
    console.error("  - APPWRITE_API_KEY");
    process.exit(1);
  }
}

testConnection();

