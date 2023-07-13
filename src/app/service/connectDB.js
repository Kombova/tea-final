import { MongoClient,ServerApiVersion } from "mongodb";
const uri = process.env.URI_DB;

const clientDB = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
export default clientDB;