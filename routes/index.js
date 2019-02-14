const express = require('express');
const router = express.Router();
const Project = require("../models/Project")
const User = require("../models/User")
const ProjectUser = require("../models/ProjectUser")
const DataPoint = require("../models/DataPoint")
const {isConnected} = require("../configs/middlewares")
var isEdited = false

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
            project_id: project._id,
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

//------DATAPOINTS-------
//data capture page
router.get('/data-capture', isConnected, (req, res, next) => {
  //finding all the projects which user participates in
  ProjectUser.find({ '_participant': req.user._id })
    .populate('_project')
    .then(projects => {
      if (projects.length === 0) {
        res.render('data-capture', { message: "Join a project and start collecting data!" })
      } else {
        res.render('data-capture', { projects });
      }
    })
    .catch(err => next(err))
});
//create new datapoint
router.post('/submit-data', isConnected, (req, res, next) => {
  var projectId = req.body.projectId
	console.log('TCL: hamster', req.body)
  Project.findById(req.body.projectId)
    .then(project => {
      let newData = new DataPoint({
        _project: project._id,
        _user: req.user._id,
        comment: req.body.comment,
        location: { type: 'Point', coordinates: [req.body.lat, req.body.lng]}
      })
      return newData.save()
    })
    .then(() => res.redirect(`/project/${projectId}`))
    .catch(err => next(err))
})
//delete a datapoint
router.post('/delete-datapoint/:datapointId', isConnected, (req, res, next)  => {
  DataPoint.findByIdAndDelete(req.params.datapointId)
    .then(dataPointDeleted => {
      res.redirect(`/project/${dataPointDeleted._project}`)
    })
})

// ------USER PROFILE-----
// render profile page with user information 
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
      res.render('profile', {user, projectsIown, projectsIparticipateIn, isEdited})
      isEdited = false
    })
})
// user clicked edit button - re-render profile page with isEdited=true
router.get("/edit-profile", isConnected, (req, res, next) => {
  isEdited = true,
  res.redirect('/profile')
})
// updates edited profile information in the database
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

// -----PROJECTS-----
// create a new project
router.post("/new-project", isConnected, (req,res,next) => {
  let newProject = new Project ({
    projectName: req.body.projectName,
    description: req.body.description,
    _owner: req.user._id,
    status: 'public',
  })
  newProject.save()
    .then((project) => {
      let newCard = new ProjectUser ({
        _project: project.id,
        _participant: req.user._id
      })
      newCard.save()
    })
    .then(() => res.redirect("/profile"))
    .catch(err => next(err))
})
// renders the project-data page showing the users project information 
router.get("/project/:projectId", isConnected, (req,res,next) => {
  Promise.all([
    Project.findOne({'_id': req.params.projectId}),
    DataPoint.find({'_project': req.params.projectId}).populate('_user').sort({ created_at : -1 }),
    ProjectUser.find({'_project': req.params.projectId}).populate('_user')
  ])
    .then(results => {
      let project = results[0]
      let dataPoints = results[1]
      let projectUsers = results[2]
      let isOwned = false
      if (req.user._id.equals(project._owner)) isOwned = true
      let isJoined = false
      if(projectUsers.some(card => {
        return card._participant.equals(req.user._id)
      })) isJoined = true
      let userId = req.user._id
      res.render("project-data", {project, dataPoints, isOwned, isEdited, isJoined, userId})
      isEdited = false
    })
  })
// user clicked edit project button - takes project id, sets isEdited to true and re-renders project-data page
router.post('/edit-project/:projectId', (req,res,next) => {
  isEdited = true
  var projectId = req.params.projectId
  res.redirect(`/project/${projectId}`)
})
// user "joins" project - creates a new ProjectUser document object
router.get("/join/:projectId/:page", isConnected, (req,res,next) => {
  let newProjectUser = new ProjectUser ({
    _project: req.params.projectId,
    _participant: req.user._id
  })
  newProjectUser.save()
  .then(() => {
    if (req.params.page === "home") {res.redirect("/")}
    if (req.params.page === "project") {res.redirect(`/project/${req.params.projectId}`)}
  })
  .catch(err => next(err))
})
// user "leaves" project - deletes ProjectUser document object
router.get("/leave/:projectId", isConnected, (req,res,next) => {
  let id = req.params.projectId  
  ProjectUser.findOneAndDelete({ $and: [{_participant: req.user._id},{_project: id}]})
    .then(() => { 
      res.redirect("/")
    })
    .catch(err => next(err))
  })
// updates edited project information in the database
router.post("/update-project/:projectId", isConnected, (req,res,next) => {
  const projectId = req.params.projectId
  let { projectName, description, } = req.body
  Project.findOneAndUpdate({ '_id': projectId },
    {
      $set: {
        'projectName': projectName,
        'description': description,
      }
    })
  .then(() => {
    res.redirect("/profile")
  })
  .catch(err => next(err))
})
// delete a project 
router.post("/delete-project/:projectId", isConnected, (req,res,next) => {
  let projectId = req.params.projectId
  Promise.all([
    Project.findOneAndDelete({"_id": projectId}),
    ProjectUser.deleteMany({"_project": projectId}),
    DataPoint.deleteMany({"_project": projectId})
  ])
    .then(results => {
      let project = results[0]
      res.render("project-deleted", {project})
    })
})

module.exports = router;
