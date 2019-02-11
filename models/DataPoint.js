const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const dataPointSchema = new Schema({
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  _project: {
    type: Schema.Types.ObjectId,
    ref: 'Project'
  },
  comment: String,
  image: String,
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point'
    },
    coordinates: {
      type: [Number],
      required: true,
    }
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const DataPoint = mongoose.model('DataPoint', dataPointSchema);
module.exports = DataPoint;
