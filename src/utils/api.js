import axios from 'axios';

export function getAllTags(id) {
    return axios.get(`api/notes/tags/user/${id}`)
    .then((res) => {return res.data})
    .catch((err) => console.log(err));
}

export function getAllNotes(id) {
    return axios.get(`api/notes/user/${id}`)
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

export function getAllCategories(id) {
    console.log("getAllCategories: ", id);
    return axios.get(`api/notes/categories/user/${id}`)
    .then((res) => {return res.data})
    .catch(err => console.log(err));
}

export function getCategoryNotes(category, userID) {
    return axios.get(`api/notes/categories/${category}/?userID=${userID}`)
    .then((res) => {return res.data})
    .catch(err => console.log(err));
}

export function splitByCommas(inputString) {
    return inputString.split(",").filter(i => /\S/.test(i));
}