const express = require('express');
const router = express.Router();
const Project = require("../models/Project")
const User = require("../models/User")
const ProjectUser = require("../models/ProjectUser")
const DataPoint = require("../models/DataPoint")
const {isConnected} = require("../configs/middlewares")

// routes for home page
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

// routes for data capture
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

// routes for user profile
router.get("/profile", isConnected, (req,res,next) => {
  Promise.all([
    Project.find({'_owner': req.user._id}),
    ProjectUser.find({'_participant': req.user._id})
      .populate('_project')
  ])
    .then(result => {
      let user = req.user
      let projectsIown = result[0]
      let projectsIparticipateIn = result[1]
			res.render('profile', {user, projectsIown, projectsIparticipateIn})
    })
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
    .then(() => res.redirect("/profile"))
    .catch(err => next(err))
})

// routes for CRUD on projects
router.post("/new-project", isConnected, (req,res,next) => {
  let newProject = new Project ({
    projectName: req.body.projectName,
    description: req.body.description,
    _owner: req.user._id,
    status: 'public',
  })
  newProject.save()
    .then(() => res.redirect("/profile"))
    .catch(err => next(err))
})

router.get("/project/:projectId", isConnected, (req,res,next) => {
  Promise.all([
    Project.findOne({'_id': req.params.projectId}),
    DataPoint.find({'_project': req.params.projectId})
  ])
    .then(results => {
      let project = results[0]
      let dataPoints = results[1]
      res.render("project-data", {project, dataPoints})
    })
})
router.get("/join/:projectId", isConnected, (req,res,next) => {
  let newProjectUser = new ProjectUser ({
    _project: req.params.projectId,
    _participant: req.user._id
  })
  newProjectUser.save()
  .then(() => {
    res.redirect("/")
  })
  .catch(err => next(err))
})

router.get("/leave/:projectId", isConnected, (req,res,next) => {
  let id = req.params.projectId  
  ProjectUser.findOneAndDelete({ $and: [{_participant: req.user._id},{_project: id}]})
    .then(() => { 
      res.redirect("/")
    })
    .catch(err => next(err))
  })

module.exports = router;
