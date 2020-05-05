const express = require("express");
const { MongoClient, ObjectID } = require("mongodb");
const bodyParser = require("body-parser");
const assert = require("assert");
const cors = require("cors");

const app = express();
app.use(cors()); // solution pour le probleme CORS (requete provenant de multiple serveur)
app.use(bodyParser.json());

const mongo_url = "mongodb://localhost:27017";
const crudDB = "crud-app";

MongoClient.connect(mongo_url,{ useUnifiedTopology: true }, (err, client) => {
  assert.equal(err, null, "Failed connection to DB");
  const db = client.db(crudDB);
  /*------------------------------List Contacts ------------------------------------*/

  app.get("/contacts", (req, res) => {
    db.collection("listContacts")
      .find()
      .toArray((err, data) => {
        err ? res.send("can not find contacts") : res.send(data);
      });
  });
// ------------------------------- Get one Contact -----------------------------------/
// I added a request here you need to find one then update it 
app.get("/contacts/:id", (req, res) => {
  const id = ObjectID(req.params.id);
  db.collection("listcontact")
    .findOne({ _id: id })
    .then(data => res.send(data))
    .catch(err => res.send("cannot get contact list"));
});

  /*-------------------------------------------------------------------------------*/
  /*------------------------------Add Contact ------------------------------------*/

  app.post("/add_contact", (req, res) => {
    db.collection("listContacts").insertOne(req.body, (err, data) => {
      err ? res.send("can not add contact") : res.send(data);
    });
  });
  /*-------------------------------------------------------------------------------*/
  /*------------------------------Delete Contact ------------------------------------*/

  app.delete("/deleteContact/:id", (req, res) => {
    db.collection("listContacts").findOneAndDelete(
      { _id: ObjectID(req.params.id) },
      (err, data) => {
        err ? res.send("can not delete contact") : res.send(data);
      }
    );
  });
  /*-------------------------------------------------------------------------------*/
  /*------------------------------Update Contact ------------------------------------*/

  app.put("/updateContact/:id", (req, res) => {
    db.collection("listContacts").findOneAndUpdate(
      { _id: ObjectID(req.params.id) },
      { $set: { ...req.body } },
      (err, data) => {
        err ? res.send("can not update contact") : res.send(data);
      }
    );
  });
  /*-------------------------------------------------------------------------------*/
});

app.listen("3001", (error) => {
  error
    ? console.log("cannot connect to the server")
    : console.log("server running on port 3001");
});
