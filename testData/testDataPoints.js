const users = require('../testData/testUserData')
const DataPoint = require('../models/DataPoint')
const projects = require('../testData/testProjectData')


let datapoints = [
  new DataPoint ({
    _user: users[2]._id,
    _project: projects[0]._id,
    comment: 'Just saw one which looked exactly as described!',
    image: "",
    location: { type: 'Point', coordinates: [52, 13]
    }
  }),
  new DataPoint ({
    _user: users[3]._id,
    _project: projects[1]._id,
    comment: 'This one was definitely a dog. A very cuddly one.',
    image: "",
    location: { type: 'Point', coordinates: [52.383106, 13.057207]
    }
  }),
  new DataPoint ({
    _user: users[4]._id,
    _project: projects[2]._id,
    comment: 'Dracarys!',
    image: "",
    location: { type: 'Point', coordinates: [52.757815, 13.263672]
    }
  }),
  new DataPoint ({
    _user: users[5]._id,
    _project: projects[0]._id,
    comment: 'Fluffy bunny hopped in the direction of the forest',
    image: "",
    location: { type: 'Point', coordinates: [52.538651, 13.441793]
    }
  }),
  new DataPoint ({
    _user: users[6]._id,
    _project: projects[1]._id,
    comment: 'This one looked sick, but it was a dog, I am pretty sure',
    image: "",
    location: { type: 'Point', coordinates: [52.373106, 13.047207]
    }
  }),
  new DataPoint ({
    _user: users[7]._id,
    _project: projects[2]._id,
    comment: 'Did you burn down a village again?! Come on!',  
    image: "",
    location: { type: 'Point', coordinates: [52.747815, 13.253672]
    }
  }),
  new DataPoint ({
    _user: users[2]._id,
    _project: projects[0]._id,
    comment: 'Saw a sick one near my home tight now',
    image: "",
    location: { type: 'Point', coordinates: [52.508651, 13.411793]
    }
  }),
  new DataPoint ({
    _user: users[3]._id,
    _project: projects[1]._id,
    comment: 'I saw something hiding in the park on the other side of the building',    
    image: "",
    location: { type: 'Point', coordinates: [52.363106, 13.037207]
    }
  }),
  new DataPoint ({
    _user: users[4]._id,
    _project: projects[2]._id,
    comment: 'Saw the youngest one, but he was to fast!',    
    image: "",
    location: { type: 'Point', coordinates: [52.737815, 13.243672]
    }
  }),
  new DataPoint ({
    _user: users[5]._id,
    _project: projects[0]._id,
    comment: 'Hophophop',    
    image: "",
    location: { type: 'Point', coordinates: [52.518651, 13.421793]}
  }),
]

module.exports = datapoints;

