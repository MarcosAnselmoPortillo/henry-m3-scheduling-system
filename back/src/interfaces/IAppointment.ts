export interface IAppointment {
    id: number;
    date: Date;
    time: string;
    userId: number; // ID del usuario que agendó el turno, referencia al usuario
    status: 'active' | 'cancelled'; // status actual del turno, que puede ser “active” o “cancelled”.
}