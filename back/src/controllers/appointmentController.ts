import { Request, Response } from 'express';

export const getAppointments = (req: Request, res: Response) => {
    res.send('Obtener el listado de todos los turnos de todos los usuarios');
};

export const getAppointmentById = (req: Request, res: Response) => {
    res.send('Obtener el detalle de un turno específico');
};

export const scheduleAppointment = (req: Request, res: Response) => {
    res.send('Agendar un nuevo turno');
};

export const cancelAppointment = (req: Request, res: Response) => {
    res.send('Cambiar el estatus de un turno a “cancelled”');
};