const users = require('../testData/testUserData')
const Project = require('../models/Project')


let projects = [
  new Project ({
    projectName: 'Rabbits',
    description: "There's a new mystery disease killing all the rabbits, we need data on where they are dying to map the spread of the disease",
    _owner: users[0]._id,
    status: 'public',
  }),
  new Project ({
    projectName: 'Dogs',
    description: "The WeWork building at Potsdamer platz has been overrun by alien creatures masquerading as cute small cute dogs,",
    _owner: users[0]._id,
    status: 'public',
  }),
  new Project ({
    projectName: 'Rough sleepers',
    description: "We don't think the authorities are counting the correct number of people rough sleeping and want to collect our own data on the number of people sleeping on the streets in Berlin.",
    _owner: users[1]._id,
    status: 'public',
  }),
]

module.exports = projects;
