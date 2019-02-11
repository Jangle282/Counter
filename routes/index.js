const express = require('express');
const router  = express.Router();
const Project = require("../models/Project")
const { isConnected } = require('../configs/middlewares')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/data-capture', (req, res, next) => {
  Project.find()
    .then(projects => {
      res.render('data-capture', {projects});
    })
    .catch(err => next(err))
});

router.get("/profile", isConnected, (req,res,next) => {
  res.render("profile")
})

module.exports = router;
