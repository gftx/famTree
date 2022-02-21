const mongoose = require('mongoose');

mongoose.Promise = global.Promise;


const url = "mongodb+srv://Anton:Anton1122@famtree.gvahs.mongodb.net/famTree?retryWrites=true&w=majority"
// Connect MongoDB at default port 27017.
let mong = mongoose.connect(url, {
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});

