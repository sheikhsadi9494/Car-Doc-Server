const express = require('express');
const app = express();
var cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;

// dbUesr3
// mF4XxWELLZnVvDjo

// middleware 
app.use(cors());
app.use(express.json());


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://<username>:<password>@cluster0.cj5acxc.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


app.get('/', (req, res) => {
    res.send('Car Doctor Server Running');
});

app.listen(port, () => {
    console.log('app running on port', port);
})


