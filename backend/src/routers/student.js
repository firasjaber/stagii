import { Router } from 'express';
import {
  addProfile,
  getOneTicket,
  getProfile,
  getTicket,
  submitTicket,
} from '../controllers/student.js';

const router = Router();

router.get('/ticket/all', getTicket);
router.get('/ticket/:id', getOneTicket);
router.get('/:id', getProfile);
router.post('/addprofile', addProfile);
router.post('/ticket', submitTicket);

export default router;
