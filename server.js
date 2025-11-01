const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://hamsika_27:HryjG7NAje3RYSee@busticketdb.yv9tw7n.mongodb.net/?appName=BusTicketDB";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("✅ Successfully connected to MongoDB!");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
  } finally {
    await client.close();
  }
}

run();
