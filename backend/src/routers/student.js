import { Router } from 'express';
import {
  addProfile,
  deleteNotification,
  getNotifications,
  getOneTicket,
  getProfile,
  getTicket,
  resolveTicket,
  submitTicket,
} from '../controllers/student.js';

const router = Router();

router.get('/ticket/all', getTicket);
router.get('/ticket/:id', getOneTicket);
router.put('/ticket/:id', resolveTicket);
router.get('/notification/all', getNotifications);
router.delete('/notification/:id', deleteNotification);
router.get('/:id', getProfile);
router.post('/addprofile', addProfile);
router.post('/ticket', submitTicket);

export default router;
