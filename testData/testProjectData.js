const users = require('../testData/testUserData')
const Project = require('../models/Project')


let projects = [
  new Project ({
    projectName: 'Myxomatosis in wild rabbit population',
    description: "This disease is spreading rapidly and killing all the rabbits, we need data on where the infected animals are to map the spread of the disease",
    _owner: users[0]._id,
    status: 'public',
  }),
  new Project ({
    projectName: 'Are they really Dogs?',
    description: "The WeWork building at Potsdamer Platz has been overrun by alien creatures masquerading as cute small dogs,",
    _owner: users[0]._id,
    status: 'public',
  }),
  new Project ({
    projectName: 'Rough sleeping',
    description: "We don't think the authorities are counting the correct number of people rough sleeping on the street in Berlin and want to collect our own data",
    _owner: users[1]._id,
    status: 'public',
  }),
]

module.exports = projects;
