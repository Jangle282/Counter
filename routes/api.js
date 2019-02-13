const express = require('express');
const router  = express.Router();
const Project = require("../models/Project")
const User = require("../models/User")
const ProjectUser = require("../models/ProjectUser")
const DataPoint = require("../models/DataPoint")
const {isConnected} = require("../configs/middlewares")

router.get('/data-points/:projectId', (req, res, next) => {
  DataPoint.find({'_project': req.params.projectId})
    .then((dataPoints) => {
      res.json(dataPoints);
    })
});


module.exports = router;