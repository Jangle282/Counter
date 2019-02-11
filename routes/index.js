const express = require('express');
const router  = express.Router();
const Project = require("../models/Project")

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

module.exports = router;
