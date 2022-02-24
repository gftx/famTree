const mongoose = require('mongoose')

const personSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    secondName: {
        type: String,
        required: false
    },
    birthDate: {
        type: String,
        required: true
    },
    parents: {
        type: Array,
        required: false
    },
    childrens: {
        type: Array,
        required: false
    }
}, { timestamps: true })

const User = mongoose.model("User", userSchema)

module.exports = User