const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error: ' + err));    
});

router.route('/add').post((req, res) => {
  const email = req.body.email;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const googleID = req.body.googleID;
  const password = req.body.password;
  const date = Date.parse(req.body.date);

  const newUser = new User({
    email,
    firstName,
    lastName,
    googleID,
    password,
    date
  });

  newUser.save()
  .then(() => res.json(newUser))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/email/:email').get((req, res) => {
  User.findOne({"email": req.params.email})
      .then((user) => res.json(user))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/addNote/:id').post((req, res) => {
  const userID = req.params.id;
  const noteID = req.body.noteID;
  User.updateOne({_id: userID}, {$push: {noteIDs: noteID}})
    .then(() => res.json('User updated.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
User.findById(req.params.id)
    .then(user => {
    user.email = req.body.email;
    user.date = Date.parse(req.body.date);

    user.save()
        .then(() => res.json('User updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;