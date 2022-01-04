import mongoose from 'mongoose';

const NotificationSchema = mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
    studentName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Notification', NotificationSchema);
