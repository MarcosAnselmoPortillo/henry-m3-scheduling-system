import {Router} from 'express';
import * as userController from '../controllers/userController';

const router = Router();

// Rutas para usuarios
router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);

export default router;