const express = require('express');
const router  = express.Router();
const Project = require("../models/Project")
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

module.exports = router;
