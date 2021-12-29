import mongoose from 'mongoose';

const UserSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ['STUDENT', 'EMPLOYER', 'ADMINISTRATIVE'],
      default: 'STUDENT',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('User', UserSchema);
