import {Router} from 'express';
import * as appointmentController from '../controllers/appointmentController';

const router = Router();

// Rutas para turnos
router.get('/', appointmentController.getAppointments);
router.get('/:id', appointmentController.getAppointmentById);
router.post('/schedule', appointmentController.scheduleAppointment);
router.put('/cancel', appointmentController.cancelAppointment);

export default router;