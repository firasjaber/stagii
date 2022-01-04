import mongoose from 'mongoose';

const StudentSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    studentName: {
      type: String,
      required: true,
    },
    cin: {
      type: String,
      required: true,
    },
    major: {
      type: String,
      required: true,
    },
    classGroup: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    studentEmail: {
      type: String,
      required: true,
    },
    studentPhone: {
      type: String,
      required: true,
    },
    linkedinProfile: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Student', StudentSchema);
