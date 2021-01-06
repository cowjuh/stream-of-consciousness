const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {type: String, required: true, index: { unique: true }},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    googleID: {type: String, required: false},
    password: {type: String, required: false},
    noteIDs: [{
        type: String,
        required: false,
    }]
},
{
    timestamps: true
})

const Note = mongoose.model("User", userSchema);

module.exports = Note;