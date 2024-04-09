import { User } from "../entities/User";

export interface AppointmentDto {
    date: Date,
    time: string,
    user: User, 
    status: "active"
}