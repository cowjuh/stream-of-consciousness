import axios from 'axios';

export function getAllTags() {
    return axios.get(`notes/tags`)
    .then((res) => {return res.data})
    .catch((err) => console.log(err));
}

export function getAllNotes() {
    return axios.get(`notes/`)
    .then((res) => {return res.data})
    .catch((err) => console.log(err));
}

export function deleteNoteByID(id) {
    return axios.delete(`notes/${id}`)
    .then(console.log("Note deleted!"))
    .catch(err => console.log(err));
}

export function getNoteByID(id) {
    return axios.get(`notes/${id}`)
    .then((res) => {return res.data})
    .catch(err => console.log(err));
}

export function getAllCategories() {
    return axios.get(`notes/categories`)
    .then((res) => {return res.data})
    .catch(err => console.log(err));
}

export function getCategoryNotes(category) {
    return axios.get(`notes/categories/${category}`)
    .then((res) => {return res.data})
    .catch(err => console.log(err));
}

export function splitByCommas(inputString) {
    return inputString.split(",").filter(i => /\S/.test(i));
}