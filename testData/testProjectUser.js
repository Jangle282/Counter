const projects = require('../testData/testProjectData')
const users = require('../testData/testUserData')
const ProjectUser = require('../models/ProjectUser')


let projectUser = [
new ProjectUser ({
  _project: projects[0]._id, // reabbit
  _participant: users[0]._id
}),
new ProjectUser ({
  _project: projects[1]._id, //dogs
  _participant: users[0]._id
}),
new ProjectUser ({
  _project: projects[2]._id, // rough sleepers
  _participant: users[1]._id
}),
new ProjectUser ({
  _project: projects[0]._id,
  _participant: users[2]._id
}),
new ProjectUser ({
  _project: projects[1]._id,
  _participant: users[3]._id
}),
new ProjectUser ({
  _project: projects[2]._id,
  _participant: users[4]._id
}),
new ProjectUser ({
  _project: projects[0]._id,
  _participant: users[5]._id
}),
new ProjectUser ({
  _project: projects[1]._id,
  _participant: users[6]._id
}),
new ProjectUser ({
  _project: projects[2]._id,
  _participant: users[7]._id
}),
new ProjectUser ({ // for Jon Snow and white walkers
  _project: projects[4]._id,
  _participant: users[3]._id
}),
new ProjectUser ({ // for Jon Snow and white walkers
  _project: projects[2]._id,
  _participant: users[3]._id
}),
new ProjectUser ({ // for Kiarra & rough sleeping
  _project: projects[3]._id,
  _participant: users[2]._id
}),
]

module.exports = projectUser;