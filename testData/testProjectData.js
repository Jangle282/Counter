const users = require('../testData/testUserData')
const Project = require('../models/Project')


let projects = [
  new Project ({
    projectName: 'Myxomatosis in rabbits',
    description: "This disease is spreading rapidly and killing all the rabbits, we need data on where the infected animals are to map the spread of the disease",
    _owner: users[0]._id,
    status: 'public',
  }),
  new Project ({
    projectName: 'Are they Dogs?',
    description: "The WeWork building at Potsdamer Platz has been overrun by alien creatures masquerading as cute small dogs,",
    _owner: users[0]._id,
    status: 'public',
  }),
  new Project ({
    projectName: 'Dragons',
    description: "Where are my dragons??? It looks like I've lost them. Help me find my dragons!",
    _owner: users[7]._id,
    status: 'public',
  }),
  new Project ({
    projectName: 'Rough Sleeping',
    description: "We don't think the authorities are counting the correct number of people rough sleeping on the street in Berlin and want to collect our own data",
    _owner: users[1]._id,
    status: 'public',
  }),
  new Project ({
    projectName: 'White Walkers',
    description: "Winter is Coming! I might be just a bastard from the North but I know what I saw!",
    _owner: users[3]._id,
    status: 'public',
  }),
]

module.exports = projects;
