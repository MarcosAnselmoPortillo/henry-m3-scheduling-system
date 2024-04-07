export interface IUser {
    id: number;
    name: string;
    email: string;
    birthdate: Date;
    nDni: number;
    credentialId: number; // ID de las credenciales, referencia al par de credenciales que posee el usuario.
}