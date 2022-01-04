import { Router } from 'express';
import { addProfile } from '../controllers/company.js';

const router = Router();

router.post('/addprofile', addProfile);

export default router;
