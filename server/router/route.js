import express from 'express';
import UserSignUp from '../trigger/user-control.js';

const router= express.Router()

router.post('/signup', UserSignUp);

export default router