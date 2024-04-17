import { Request, Response } from "express";
import {
  getAllAppointmentsService,
  getAppointmentByIdService,
  createAppointmentService,
  cancelAppointmentService,
} from "../services/appointmentService";
import { AppointmentDto } from "../dtos/AppointmentDto";
import { Appointment } from "../entities/Appointment";
import { User } from "../entities/User";
import { AppDataSource } from "../config/appDataSource";

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
    const { id } = req.params;
    const appointment = await getAppointmentByIdService(Number(id));
    if (!appointment) return res.status(404).send("Appointment not found");
    res.status(200).json(appointment);
  } catch (error) {
    if (error instanceof Error)
      res.status(500).json({ message: error.message });
  }
};

export const scheduleAppointment = async (req: Request, res: Response) => {
  try {
    const user: User | null = await AppDataSource.getRepository(User).findOne({
      where: { id: req.body.userId },
    });
    if (!user) throw new Error("Invalid user");
    const appointmentData: AppointmentDto = {
      date: new Date(req.body.date),
      time: req.body.time,
      user: user,
      description: req.body.description,
    };
    const createdAppointment: Appointment = await createAppointmentService(
      appointmentData
    );
    res.status(201).json(createdAppointment);
  } catch (error) {
    if (error instanceof Error)
      res.status(400).json({ message: error.message });
  }
};

export const cancelAppointment = async (req: Request, res: Response) => {
  try {
    const appointmentId: number = Number(req.params.id);
    const canceledAppointment = await cancelAppointmentService(appointmentId);
    res.status(200).json(canceledAppointment);
  } catch (error) {
    if (error instanceof Error)
      res.status(400).json({ message: error.message });
  }
};
