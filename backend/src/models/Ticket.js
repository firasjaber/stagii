import mongoose from 'mongoose';

const TicketSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    studentName: {
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
    message: {
      type: String,
      required: true,
    },
    pending: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Ticket', TicketSchema);
