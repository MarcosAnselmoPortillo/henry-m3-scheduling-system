import { ICredentialDto } from "../dtos/ICredentialDto";
import { IUserDto } from "../dtos/IUserDto";
import { IUser } from "../interfaces/IUser";
import { credentialService } from "./credentialService";

let userData: IUser[] = [];
let userIdCounter: number = 1;

export const getAllUsersService = async (): Promise<IUser[]> => {
  const allUsers: IUser[] = userData;
  return allUsers;
};

export const getUserByIdService = async (id: number): Promise<IUser> => {
  const foundUser: IUser | undefined = userData.find((user) => user.id === id);
  if (!foundUser) throw new Error(`No user with the ID "${id}" was found.`);
  return foundUser;
};

export const createUserService = async (
  userDto: IUserDto,
  credentialDto: ICredentialDto
): Promise<IUser> => {
  const credentialId = await credentialService.createCredential(credentialDto);
  const newUser: IUser = {
    id: userIdCounter++,
    name: userDto.name,
    email: userDto.email,
    birthdate: userDto.birthdate,
    nDni: userDto.nDni,
    credentialId: credentialId,
  };
  userData.push(newUser);
  return newUser;
};

export const validateUserIdForAppointment = async (userId: number): Promise<boolean> => {
    // Verifica si el usuario con el userId proporcionado existe
    const user = await userData.find((user) => user.id === userId);
    
    // Si el usuario existe, retorna verdadero, de lo contrario, retorna falso
    return !!user;
};