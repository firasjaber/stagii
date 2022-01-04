import Ticket from '../models/Ticket.js';
import User from '../models/User.js';
import Student from './../models/Student.js';

export const getProfile = async (req, res) => {
  try {
    const data = await Student.findOne({ user: req.params.id });
    return res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
};

export const addProfile = async (req, res) => {
  try {
    console.log(req.body);
    await Student.create(req.body);
    await User.findByIdAndUpdate(
      req.body.user,
      { hasProfile: true },
      { new: true }
    );
    return res
      .status(200)
      .json({ success: true, message: 'Student created succesfully' });
  } catch (error) {
    console.log(error);
  }
};

export const submitTicket = async (req, res) => {
  try {
    console.log(req.body);
    const student = await Student.findOne({ user: req.body.id });
    await Ticket.create({ ...req.body, studentPhone: student.studentPhone });
    return res
      .status(200)
      .json({ success: true, message: 'Ticket created succesfully' });
  } catch (error) {
    console.log(error);
  }
};

export const getTicket = async (req, res) => {
  try {
    const tt = await Ticket.find({});
    return res.status(200).json({ success: true, tickets: tt });
  } catch (error) {
    console.log(error);
  }
};

export const getOneTicket = async (req, res) => {
  try {
    const tt = await Ticket.findById(req.params.id);
    return res.status(200).json({ success: true, ticket: tt });
  } catch (error) {
    console.log(error);
  }
};
