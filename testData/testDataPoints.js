const users = require('../testData/testUserData')
const DataPoint = require('../models/DataPoint')
const projects = require('../testData/testProjectData')


let datapoints = [
  new DataPoint ({
    _user: users[2]._id,
    _project: projects[0]._id,
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet convallis dui vel venenatis. Sed blandit vitae diam non sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti.',
    image: "",
    location: { type: 'Point', coordinates: [52, 13]
    }
  }),
  new DataPoint ({
    _user: users[3]._id,
    _project: projects[1]._id,
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet convallis dui vel venenatis. Sed blandit vitae diam non sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti.',
    image: "",
    location: { type: 'Point', coordinates: [52.383106, 13.057207]
    }
  }),
  new DataPoint ({
    _user: users[4]._id,
    _project: projects[2]._id,
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet convallis dui vel venenatis. Sed blandit vitae diam non sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti.',
    image: "",
    location: { type: 'Point', coordinates: [52.757815, 13.263672]
    }
  }),
  new DataPoint ({
    _user: users[5]._id,
    _project: projects[0]._id,
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet convallis dui vel venenatis. Sed blandit vitae diam non sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti.',
    image: "",
    location: { type: 'Point', coordinates: [52.538651, 13.441793]
    }
  }),
  new DataPoint ({
    _user: users[6]._id,
    _project: projects[1]._id,
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet convallis dui vel venenatis. Sed blandit vitae diam non sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti.',
    image: "",
    location: { type: 'Point', coordinates: [52.373106, 13.047207]
    }
  }),
  new DataPoint ({
    _user: users[7]._id,
    _project: projects[2]._id,
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet convallis dui vel venenatis. Sed blandit vitae diam non sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti.',
    image: "",
    location: { type: 'Point', coordinates: [52.747815, 13.253672]
    }
  }),
  new DataPoint ({
    _user: users[2]._id,
    _project: projects[0]._id,
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet convallis dui vel venenatis. Sed blandit vitae diam non sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti.',
    image: "",
    location: { type: 'Point', coordinates: [52.508651, 13.411793]
    }
  }),
  new DataPoint ({
    _user: users[3]._id,
    _project: projects[1]._id,
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet convallis dui vel venenatis. Sed blandit vitae diam non sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti.',
    image: "",
    location: { type: 'Point', coordinates: [52.363106, 13.037207]
    }
  }),
  new DataPoint ({
    _user: users[4]._id,
    _project: projects[2]._id,
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet convallis dui vel venenatis. Sed blandit vitae diam non sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti.',
    image: "",
    location: { type: 'Point', coordinates: [52.737815, 13.243672]
    }
  }),
  new DataPoint ({
    _user: users[5]._id,
    _project: projects[0]._id,
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet convallis dui vel venenatis. Sed blandit vitae diam non sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti.',
    image: "",
    location: { type: 'Point', coordinates: [52.518651, 13.421793]}
  }),
]

module.exports = datapoints;

