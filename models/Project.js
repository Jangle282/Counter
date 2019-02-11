const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const projectSchema = new Schema({
  projectName: String,
  description: String,
  _owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  status: {
    type: String,
    enum: ['private', 'public', 'closed'],
    default: 'public'
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
