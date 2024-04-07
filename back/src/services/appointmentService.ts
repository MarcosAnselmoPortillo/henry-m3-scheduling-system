import { IAppointmentDto } from "../dtos/IAppointmentDto";
import { IAppointment } from "../interfaces/IAppointment";

let appointmentData: IAppointment[] = [];
let appointmentIdCounter: number = 1;

export const getAllAppointmentsService = async (): Promise<IAppointment[]> => {
  const allAppointments: IAppointment[] = appointmentData;
  return allAppointments;
};

export const getAppointmentByIdService = async (
  id: number
): Promise<IAppointment> => {
  const appointment = appointmentData.find(
    (appointment) => appointment.id === id
  );
  if (!appointment) throw new Error("No appointment found with provided ID");
  else return appointment;
};

export const createAppointmentService = async (
  appointmentDto: IAppointmentDto
): Promise<IAppointment> => {
  const newAppointment: IAppointment = {
    id: appointmentIdCounter++,
    date: appointmentDto.date,
    time: appointmentDto.time,
    userId: appointmentDto.userId,
    status: "active",
  };
  appointmentData.push(newAppointment);
  return newAppointment;
};

export const cancelAppointmentService = async (appointmentId: number): Promise<IAppointment> => {
  const appointmentIndex = appointmentData.findIndex(
    (appointment) => appointment.id === appointmentId
  );
  if (appointmentIndex == -1) {
    throw new Error("No appointment found with provided ID");
  }
  else {
      appointmentData[appointmentIndex].status = "cancelled";
      return appointmentData[appointmentIndex]
  }
};
