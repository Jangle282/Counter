const express = require('express');
const router = express.Router();
const Project = require("../models/Project")
const User = require("../models/User")
const ProjectUser = require("../models/ProjectUser")
const { isConnected } = require("../configs/middlewares")

/* GET home page */
router.get('/', (req, res, next) => {
  // passing ProjectUser docs for logged in users and all Projects docs to the view if user is logged in
  if (req.user) {
    Promise.all([
      Project.find(),
      ProjectUser.find({ '_participant': req.user._id })
    ])
      .then(([projects, projectUsers]) => {
        res.render('index', { 
          projects: projects.map(project => ({
            projectId: project._id,
            projectName: project.projectName,
            description: project.description,
            _owner: project._owner,
            status: project.status,
            isJoined: projectUsers.some(projectUser => projectUser._project.equals(project._id)),
            isOwner: project._owner.equals(req.user._id)
          }))
        })
      })
  } else { // otherwise only all Projects are passed
    Project.find()
      .then((projects) => {
        res.render('index', { projects });
      })
  }
});

router.get('/data-capture', isConnected, (req, res, next) => {
  //finding all the projects which user participates in
  ProjectUser.find({ '_participant': req.user._id })
    .populate('_project')
    .then(projects => {
      if (projects.length === 0) {
        res.render('data-capture', { message: "Sorry, you have to join a project before you can capture data!" })
      } else {
        res.render('data-capture', { projects });
      }
    })
    .catch(err => next(err))
});

router.get("/profile", isConnected, (req, res, next) => {
  let user = req.user
  res.render("profile", { user })
})

router.get("/edit-profile", isConnected, (req, res, next) => {
  let user = req.user
  let isParticipant = true
  if (req.user.role === "researcher") isParticipant = false;
  res.render("edit-profile", { user, isParticipant })
})

router.post("/edit-profile", isConnected, (req, res, next) => {
  let userId = req.user._id
  let { firstName, lastName, email, role } = req.body
  User.findOneAndUpdate({ '_id': userId },
    {
      $set: {
        'firstName': firstName,
        'lastName': lastName,
        'email': email,
        'role': role
      }
    })
    .then((user) => res.redirect("/profile"))
    .catch(err => next(err))
})


module.exports = router;
