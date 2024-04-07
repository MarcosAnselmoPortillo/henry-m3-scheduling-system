import { Request, Response } from "express";
import { getAllAppointmentsService, getAppointmentByIdService, createAppointmentService, cancelAppointmentService } from "../services/appointmentService";
import { IAppointmentDto } from "../dtos/IAppointmentDto";

export const getAppointments = async (req: Request, res: Response) => {
  try {
    const appointments = await getAllAppointmentsService();
    res.status(200).json(appointments);
  } catch (error) {
    if (error instanceof Error) res.status(400).json(error.message);
  }
};

export const getAppointmentById = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    const appointment = await getAppointmentByIdService(Number(id));
    if (!appointment) return res.status(404).send("Appointment not found");
    res.status(200).json(appointment);
  } catch (error) {
    if (error instanceof Error) res.status(500).json({ message: error.message });
  }
};

export const scheduleAppointment = async (req: Request, res: Response) => {
  try {
    const appointmentData: IAppointmentDto = {
        date: new Date(req.body.date),
        time: req.body.time,
        userId: req.body.userId
    }
    const createdAppointment = await createAppointmentService(appointmentData);
    res.status(201).json(createdAppointment);
  } catch (error) {
    if (error instanceof Error) res.status(400).json({ message: error.message});
  }
};

export const cancelAppointment = async (req: Request, res: Response) => {
  try {
    const appointmentId: number = Number(req.params.id);
    const canceledAppointment = await cancelAppointmentService(appointmentId)
    res.status(200).json(canceledAppointment);
  } catch (error) {
    if (error instanceof Error) res.status(400).json({ message: error.message})
  }
};
