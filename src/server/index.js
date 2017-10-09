'use strict';
const express = require('express');
require('dotenv').config();
const app = express();

console.log(process.env.DB_URL);
app.use(express.static('dist'));
app.get('/heartbeat', (req, res) => {
  let MongoClient = require('mongodb').MongoClient;
  let protocol = process.env.DB_PROTOCOL;
  let host = process.env.DB_HOST;
  let port = process.env.DB_PORT;
  let name = process.env.DB_NAME;
  let url = protocol+'://' + host+':' + port + '/' + name;
  MongoClient.connect(url, function(err, db) {
    let adminDb = db.admin();
    adminDb.serverStatus(function(err, info) {
      console.log(info.version);
      res.json(info.version);
      db.close();
    });
  });
});

/* eslint no-console: "off" */
app.listen(3000, () => {
  console.log('listening on port:3000');
});
