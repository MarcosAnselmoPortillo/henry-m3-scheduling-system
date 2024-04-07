import {Router} from 'express';
import * as appointmentController from '../controllers/appointmentController';
import {validateUserIdForAppointmentMiddleware} from '../middlewares/validateUserIdForAppointmentMiddleware';

const router = Router();

// Rutas para turnos
router.get('/', appointmentController.getAppointments);
router.get('/:id', appointmentController.getAppointmentById);
router.post('/schedule',validateUserIdForAppointmentMiddleware ,appointmentController.scheduleAppointment);
router.put('/cancel/:id', appointmentController.cancelAppointment);

export default router;