const express = require('express');
const router  = express.Router();
const Project = require("../models/Project")
const User = require("../models/User")
const ProjectUser = require("../models/ProjectUser")
const {isConnected} = require("../configs/middlewares")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/data-capture', isConnected, (req, res, next) => {
  //finding all the projects which user participates in
  ProjectUser.find({'_participant': req.user._id})
    .populate('_project')
    .then(projects => {
      if(projects.length === 0){
        res.render('data-capture', {message: "Sorry, you have to join a project before you can capture data!"})
      } else {
        res.render('data-capture', {projects});
      }
    })
    .catch(err => next(err))
});

router.get("/profile", isConnected, (req,res,next) => {
  let user = req.user
  res.render("profile", {user})
})

router.get("/edit-profile", isConnected, (req,res,next) => {
  let user = req.user
  let isParticipant = true
  if(req.user.role === "researcher") isParticipant = false;
  res.render("edit-profile", {user, isParticipant})
})

router.post("/edit-profile", isConnected, (req,res,next) => {
  let userId = req.user._id
  let {firstName, lastName, email, role} = req.body
  User.findOneAndUpdate({'_id': userId}, 
    {$set: {'firstName': firstName, 
    'lastName': lastName, 
    'email': email, 
    'role': role}
    })
    .then((user) => res.redirect("/profile"))
    .catch(err => next(err))
})


module.exports = router;
