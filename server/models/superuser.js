const mongoose = require('mongoose')

const superUserSchema = new mongoose.Schema({
    username: String,
    password: String
});

const SuperUser = mongoose.model('SuperUser', superUserSchema);

module.exports = SuperUser