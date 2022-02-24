const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// Create global app object
var app = express();
app.use(cors());

// Normal express config defaults
const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.json(), urlencodedParser);

// connetc to mongoDB
const mongoURI = 'your mongoURI'

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(res => {
    console.log('MongoDB Connection Succeeded.')
    //if succed connection to db start server
    const PORT = process.env.PORT || 3001
    app.listen(PORT, () => console.log('server running on port: ' + PORT))
  })
  .catch(err => {
    console.log('Error in DB connection: ' + err)
  })

app.use('/api', require('./routes/auth.js'));
app.use('/api', require('./routes/persons.js'))