import Company from './../models/Company.js';
import User from './../models/User.js';
import Notification from '../models/Notification.js';

export const getProfile = async (req, res) => {
  try {
    const data = await Company.findOne({ user: req.params.id });
    return res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
};

export const addProfile = async (req, res) => {
  try {
    console.log(req.body);
    await Company.create(req.body);
    await User.findByIdAndUpdate(
      req.body.user,
      { hasProfile: true },
      { new: true }
    );
    await Notification.create({
      studentName: req.body.companyName,
      message: req.body.companyName + ' created its profile.',
    });
    return res
      .status(200)
      .json({ success: true, message: 'Company created succesfully' });
  } catch (error) {
    console.log(error);
    console.log('INTERNAL ERROR');
  }
};
