// Seeds file that remove all users and creates test data
require('dotenv').config();

const mongoose = require("mongoose");

const User = require("../models/User");
const Project = require('../models/Project')
const DataPoint = require('../models/DataPoint')
const ProjectUser = require('../models/ProjectUser')

const users = require('../testData/testUserData')
const datapoints = require('../testData/testDataPoints')
const projects = require('../testData/testProjectData')
const projectUser = require('../testData/testProjectUser')


mongoose.set('useCreateIndex', true)
mongoose
  .connect("mongodb://heroku_v734hcl2:qfd7up0hbema88fgrvub2o0quc@ds237868.mlab.com:37868/heroku_v734hcl2", {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

  // ----Delete and create test data in database-----
console.log("I'm here'")
User.deleteMany()
.then(() => Project.deleteMany())
.then(() => DataPoint.deleteMany())
.then(() => ProjectUser.deleteMany())
.then(() => {
  let promises = []
  for (let i=0; i < users.length; i++) {
    promises.push(users[i].save())
  }
  for (let i=0; i < projects.length; i++) {
    promises.push(projects[i].save())
  }
  for (let i=0; i < datapoints.length; i++) {
    promises.push(datapoints[i].save())
  }
  for (let i=0; i < projectUser.length; i++) {
    promises.push(projectUser[i].save())
  }
  return Promise.all(promises)
})
.then(created => {
  console.log(created)
  mongoose.disconnect()
})
.catch(err => {
  mongoose.disconnect()
  throw err
})