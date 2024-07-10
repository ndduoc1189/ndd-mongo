const express = require("express");
const app = express();
const PORT = 3000;
const { MongoClient } = require("mongodb");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const uri = "mongodb://root:password@mongodb:27017";
const client = new MongoClient(uri);

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

app.get("/", async (req, res) => {
  try {
    await client.connect();
    const db = client.db("user-account");
    const collection = db.collection("users");
    const result = await collection.findOne({ userid: 1 }, options);

    res.json(result);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
