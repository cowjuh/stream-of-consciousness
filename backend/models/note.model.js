const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    authorID: {type: String, required: false},
    title: {type: String, required: true},
    content: {type: String, required: true},
    category: {type: String, required: false},
    tags: [{
        type: String,
        required: false,
        trim: true,
    }]
},
{
    timestamps: true
})

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;