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
