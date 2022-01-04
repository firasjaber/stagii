import { Router } from 'express';
import { addProfile, getProfile } from '../controllers/student.js';

const router = Router();

router.get('/:id', getProfile);
router.post('/addprofile', addProfile);

export default router;
