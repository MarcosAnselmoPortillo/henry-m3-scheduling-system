import { AppDataSource } from "../config/appDataSource";
import { AppointmentDto } from "../dtos/AppointmentDto";
import { Appointment } from "../entities/Appointment";

export const getAllAppointmentsService = async (): Promise<Appointment[]> => {
  const allAppointments: Appointment[]  = await AppDataSource.getRepository(Appointment).find();
  return allAppointments;
};

export const getAppointmentByIdService = async (
  id: number
): Promise<Appointment> => {
  const appointment = await AppDataSource.getRepository(Appointment).findOne({ where: {id} });
  if (!appointment) throw new Error("No appointment found with provided ID");
  else return appointment;
};

export const createAppointmentService = async (
  appointmentDto: AppointmentDto
): Promise<Appointment> => {
  const appointmentSaved =
    AppDataSource.getRepository(Appointment).save(appointmentDto);
  return appointmentSaved;
};

export const cancelAppointmentService = async (
  appointmentId: number
): Promise<Appointment> => {
  const appointment = await AppDataSource.getRepository(Appointment).findOne({where:{id : appointmentId}});
  if (!appointment) {
    throw new Error("No appointment found with provided ID");
  } else {
    appointment.status = "cancelled";
    const  updatedAppointment = await AppDataSource.getRepository(Appointment).save(appointment);
    return updatedAppointment;
  }
};
