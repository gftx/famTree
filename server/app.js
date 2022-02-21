const http = require('http'),
  path = require('path'),
  methods = require('methods'),
  express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  db = require("./db/db")

const SuperUser = require('./models/superuser')



// Create global app object
var app = express();

app.use(cors());

// Normal express config defaults
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



const user = new SuperUser({ username: 'user2', password: 'password' });
// user.save(function (err) {
//   if (err) return handleError(err);
//   // saved!
// });

// finally, let's start our server...
var server = app.listen(process.env.PORT || 3001, function () {
  console.log('Listening on port ' + server.address().port);
});
