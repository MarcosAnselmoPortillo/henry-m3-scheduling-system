import {Router} from 'express';
import * as userController from '../controllers/userController';
import { validateLoginData } from '../middlewares/validateLoginData';
import { validateUserData } from '../middlewares/validateUserData';
import { validateUserId } from '../middlewares/validateUserIdForAppointment';

const router = Router();

// Rutas para usuarios
router.get('/', userController.getUsers);
router.get('/:id', validateUserId,userController.getUserById);
router.post('/register', validateUserData, userController.registerUser);
router.post('/login', validateLoginData, userController.loginUser);

export default router;