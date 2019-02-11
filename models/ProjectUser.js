const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const projectUserSchema = new Schema({
  _project: {
    type: Schema.Types.ObjectId,
    ref: 'Project'
  },
  _participant: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
});

const ProjectUser = mongoose.model('ProjectUser', projectUserSchema);
module.exports = ProjectUser;
