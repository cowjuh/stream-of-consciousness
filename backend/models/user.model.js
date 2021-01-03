const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {type: String, required: true},
    userID: {type: String, required: true},
},
{
    timestamps: true
})

const Note = mongoose.model("User", userSchema);

module.exports = Note;