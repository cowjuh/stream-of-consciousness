const router = require('express').Router();
let Note = require('../models/note.model');

router.route('/').get((req, res) => {
  Note.find()
  .then(notes => res.json(notes))
  .catch(err => res.status(400).json('Error: ' + err));    
});

router.route('/user/:id').get((req, res) => {
  Note.find({userID: req.params.id})
  .then(notes => res.json(notes))
  .catch(err => res.status(400).json('Error: ' + err));    
});

router.route('/filterByTag/user/:id').get((req, res) => {
  let tagQuery = req.query.tag;
  let id = req.params.id;
  let categoryQuery = req.query.category;
  if (tagQuery.length != 0 && (!categoryQuery || categoryQuery==="All")) {
    Note.find({tags: {$all: tagQuery.split(',')}}, {userID: id})
    .then(notes => res.json(notes))
    .catch(err => res.status(400).json('Error: ' + err));    
  }
  else if (tagQuery.length != 0 && categoryQuery) {
    Note.find(
      {
        tags: {$all: tagQuery.split(',')},
        category: categoryQuery
    })
    .then(notes => res.json(notes))
    .catch(err => res.status(400).json('Error: ' + err));  
  }
  else {
    Note.find()
    .then(notes => res.json(notes))
    .catch(err => res.status(400).json('Error: ' + err)); 
  }
});

router.route('/tags/user/:id').get((req, res) => {
  Note.distinct("tags", {"userID": req.params.id})
  .then(notes => res.json(notes))
  .catch(err => res.status(400).json('Error: ' + err));    
});

router.route('/categories/user/:id').get((req, res) => {
  Note.distinct("category", {"userID": req.params.id})
  .then(notes => res.json(notes))
  .catch(err => res.status(400).json('Error: ' + err));    
});

router.route('/categories/:category').get((req, res) => {
  console.log(req.query.userID)
  Note.find({userID: req.query.userID, category: req.params.category})
  .then(notes => res.json(notes))
  .catch(err => res.status(400).json('Error: ' + err));    
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const category = req.body.category;
  const tags = req.body.tags;
  const userID = req.body.userID;
  const date = Date.parse(req.body.date);

  const newNote = new Note({
    userID,
    title,
    content,
    category,
    tags,
    date,
  });

  newNote.save()
  .then(() => res.json(newNote._id))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
Note.findByIdAndDelete(req.params.id)
    .then(() => res.json('Note deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Note.findById(req.params.id)
    .then(note => res.json(note))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
Note.findById(req.params.id)
    .then(note => {
    note.title = req.body.title;
    note.content = req.body.content;
    note.category = req.body.category;
    note.tags = req.body.tags;
    note.date = Date.parse(req.body.date);

    note.save()
        .then(() => res.json('Note updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

//  DANGEROUS - FOR TRANSFERRING FROM ACCOUNTS ONLY
// router.route('/setUserID').post((req, res) => {
//   const myID = "5ff4b3e19a84901caebe9e10"
//   Note.find()
//     .then(notes => {
//       notes.forEach(note => {
//         note.userID = myID;
//         note.save()
//           .then(note => res.json(note))
//           .catch(err => res.status(400).json('Error: ' + err));
//         });           
//       })
//     .catch(err => res.status(400).json('Error: ' + err));
// });

module.exports = router;