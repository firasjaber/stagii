import { Router } from 'express';
import { addProfile } from '../controllers/student.js';

const router = Router();

router.post('/addprofile', addProfile);

export default router;
