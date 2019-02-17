const express = require('express');
const router  = express.Router();
const Project = require("../models/Project")
const User = require("../models/User")
const ProjectUser = require("../models/ProjectUser")
const DataPoint = require("../models/DataPoint")
const {isConnected} = require("../configs/middlewares")

//-----API for 
router.get('/data-points/:projectId', (req, res, next) => {
  DataPoint.find({'_project': req.params.projectId})
    .populate('_user', 'firstName lastName email')
    .then((dataPoints) => {
      res.json(dataPoints);
    })
});


module.exports = router;