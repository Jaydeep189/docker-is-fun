const { MongoClient, ServerApiVersion } = require("mongodb");

const uri =
  "mongodb+srv://Admin-Jaydeep:Jaydeep189@cluster0.qzezt.mongodb.net/retryWrites=true";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

module.export = client;
