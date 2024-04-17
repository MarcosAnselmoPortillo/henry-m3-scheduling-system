import { AppDataSource } from "../config/appDataSource";
import { AppointmentDto } from "../dtos/AppointmentDto";
import { Appointment } from "../entities/Appointment";

export const getAllAppointmentsService = async (): Promise<Appointment[]> => {
  const allAppointments: Appointment[] = await AppDataSource.getRepository(
    Appointment
  ).find();
  return allAppointments;
};

export const getAppointmentByIdService = async (
  id: number
): Promise<Appointment> => {
  const appointment = await AppDataSource.getRepository(Appointment).findOne({
    where: { id },
  });
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
  const appointment = await AppDataSource.getRepository(Appointment).findOne({
    where: { id: appointmentId },
  });
  if (!appointment) {
    throw new Error("No appointment found with provided ID");
  }
  const todayISO = new Date().toISOString().split("T")[0];
  const today = new Date(todayISO);
  const appointmentDate = new Date(appointment.date);
  // console.log("Today's date:", today.toLocaleString());
  // console.log("Appointment date:", appointmentDate.toLocaleString());
  if (today.getTime() === appointmentDate.getTime()) {
    throw new Error(
      "Cancellations for appointments scheduled on the same day are not allowed"
    );
  } else {
    if (today.getTime() > appointmentDate.getTime())
      throw new Error("Cannot cancel an appointment in the past");
  }
  appointment.status = "cancelled";
  const updatedAppointment = await AppDataSource.getRepository(
    Appointment
  ).save(appointment);
  return updatedAppointment;
};
