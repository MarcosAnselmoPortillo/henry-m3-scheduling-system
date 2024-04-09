import { Router } from "express";
import * as appointmentController from "../controllers/appointmentController";
import { validateUserId } from "../middlewares/validateUserIdForAppointment";
import { validateScheduleAppointmentData } from "../middlewares/validateScheduleAppointmentData";

const router = Router();

// Rutas para turnos
router.get("/", appointmentController.getAppointments);
router.get("/:id", appointmentController.getAppointmentById);
router.post(
  "/schedule", validateScheduleAppointmentData,
  validateUserId,
  appointmentController.scheduleAppointment
);
router.put("/cancel/:id", appointmentController.cancelAppointment);

export default router;
