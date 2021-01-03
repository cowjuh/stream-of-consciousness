import axios from 'axios';

export function getAllTags() {
    return axios.get(`api/notes/tags`)
    .then((res) => {return res.data})
    .catch((err) => console.log(err));
}

export function getAllNotes() {
    return axios.get(`api/notes/`)
    .then((res) => {return res.data})
    .catch((err) => console.log(err));
}

export function deleteNoteByID(id) {
    return axios.delete(`api/notes/${id}`)
    .then(console.log("Note deleted!"))
    .catch(err => console.log(err));
}

export function getNoteByID(id) {
    return axios.get(`api/notes/${id}`)
    .then((res) => {return res.data})
    .catch(err => console.log(err));
}

export function getAllCategories() {
    return axios.get(`api/notes/categories`)
    .then((res) => {return res.data})
    .catch(err => console.log(err));
}

export function getCategoryNotes(category) {
    return axios.get(`api/notes/categories/${category}`)
    .then((res) => {return res.data})
    .catch(err => console.log(err));
}

export function splitByCommas(inputString) {
    return inputString.split(",").filter(i => /\S/.test(i));
}