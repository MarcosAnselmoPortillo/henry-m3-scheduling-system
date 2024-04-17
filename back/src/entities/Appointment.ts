import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
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

  @Column("varchar", { length: 100 })
  description: string;

  @Column({ type: "varchar", default: "active" })
  status: "active" | "cancelled";

  @ManyToOne(() => User, (user) => user.appointments)
  user: User;
}
