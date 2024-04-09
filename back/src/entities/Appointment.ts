import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity({
  name: "appointments",
})
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("timestamp")
  date: Date;

  @Column()
  time: string;
  
  @Column("varchar")
  status: "active" | "cancelled";

  @ManyToOne(() => User, (user) => user.appointments)
  user: User;
}