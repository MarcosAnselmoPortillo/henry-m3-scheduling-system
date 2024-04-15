import { AppDataSource } from "../config/appDataSource";
import { CredentialDto } from "../dtos/CredentialDto";
import { UserDto } from "../dtos/UserDto";
import { User } from "../entities/User";
import { ILoginUser } from "../interfaces/ILoginUser";
import { createCredential, validateCredential } from "./credentialService";

export const getAllUsersService = async (): Promise<User[]> => {
  const allUsers: User[] = await AppDataSource.getRepository(User).find();
  return allUsers;
};

export const getUserByIdService = async (id: number): Promise<User | null> => {
  console.log(id);
  try {
    const foundUser: User | null = await AppDataSource.getRepository(
      User
    ).findOne({
      where: {
        id: id,
      },
      relations: {
        appointments: true,
      },
    });
    return foundUser;
  } catch (error) {
    console.error(`Error while finding user with ID "${id}":`, error);
    return null;
  }
};

export const createUserService = async (
  userDto: UserDto,
  credentialDto: CredentialDto
): Promise<User> => {
  const foundUser: User | null = await AppDataSource.getRepository(
    User
  ).findOne({
    where: {
      email: userDto.email,
    },
  });
  if (foundUser !== null) {
    throw new Error("Email already in use");
  } else {
    const credential = await createCredential(credentialDto);
    const newUser = {
      name: userDto.name,
      email: userDto.email,
      birthdate: userDto.birthdate,
      nDni: userDto.nDni,
      credential: credential,
      appointments: [],
    };
    const userSaved = await AppDataSource.getRepository(User).save(newUser);
    return (userSaved);
  }
};

export const validateUserIdForAppointment = async (
  userId: number
): Promise<boolean> => {
  // Verifica si el usuario con el userId proporcionado existe
  const user = await AppDataSource.getRepository(User).findOne({
    where: {
      id: userId,
    },
  });

  // Si el usuario existe, retorna verdadero, de lo contrario, retorna falso
  if (user) return true;
  else return false;
};

export const loginUserService = async (
  username: string,
  password: string
): Promise<ILoginUser> => {
  const credentialDto: CredentialDto = {
    username,
    password,
  };
  const validUser: User | null = await validateCredential(credentialDto);
  if (!validUser) throw new Error("Invalid credentials");
  else {
    const loginUser: ILoginUser = {
      login: true,
      user: validUser,
    };
    return loginUser;
  }
};
