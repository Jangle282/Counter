// Seeds file that remove all users and creates test data
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Project = require('../models/Project')
const DataPoint = require('../models/DataPoint')
const ProjectUser = require('../models/ProjectUser')
const bcryptSalt = 10;

mongoose
  .connect('mongodb://localhost/counter', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

  // ----Raw Data-----
let users = [
  {
    firstName: 'Dawn',
    lastName: 'Satterfield',
    email: "Dawn.Satterfield@leonard.biz", 
    password: bcrypt.hashSync("test", bcrypt.genSaltSync(bcryptSalt)),
    role:  'participant',
    profilePicPath: ""
  },
  {
    firstName: 'Kiarra',
    lastName: 'Doyle',
    email: "Kiarra.Doyle@darwin.net", 
    password: bcrypt.hashSync("test", bcrypt.genSaltSync(bcryptSalt)),
    role:  'participant',
    profilePicPath: ""
  },
  {
    firstName: 'Kiarra',
    lastName: 'Doyle',
    email: "Kiarra.Doyle@darwin.net", 
    password: bcrypt.hashSync("test", bcrypt.genSaltSync(bcryptSalt)),
    role:  'participant',
    profilePicPath: ""
  }
]
  
  let projects = [
  
  ]
  
  let datapoints = [
  
  ]
  
  let projectUsers = [
    
  ]
  

  // ----Delete and create in database-----

User.deleteMany()
.then(() => {
  return User.create(users)
})
.then(usersCreated => {
  console.log(`${usersCreated.length} users created with the following id:`);
  console.log(usersCreated.map(u => u._id));
})
.then(() => {
  // Close properly the connection to Mongoose
  mongoose.disconnect()
})
.catch(err => {
  mongoose.disconnect()
  throw err
})