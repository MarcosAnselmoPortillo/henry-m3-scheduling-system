import { DataSource } from "typeorm"
import { User } from "../entities/User"
import { Credential } from "../entities/Credential"
import { Appointment } from "../entities/Appointment"
import{DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USERNAME} from './envs'

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    synchronize: true,
    logging: true,
    entities: [User,Credential,Appointment],
    subscribers: [],
    migrations: [],
    dropSchema:true
})