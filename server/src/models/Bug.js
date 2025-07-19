import mongoose from 'mongoose';

const bugSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    priority: {
      type: String,
      enum: ['low', 'medium', 'high'],
      default: 'medium',
    },
    status: {
      type: String,
      enum: ['open', 'in progress', 'closed'],
      default: 'open',
    },
  },
  {
    timestamps: true,
  }
);

const Bug = mongoose.model('Bug', bugSchema);

export default Bug;
