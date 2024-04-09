import { Request, Response } from "express";
import {
  getAllUsersService,
  getUserByIdService,
  createUserService,
  loginUserService,
} from "../services/userService";
import { UserDto } from "../dtos/UserDto";
import { CredentialDto } from "../dtos/CredentialDto";
import { User } from "../entities/User";
import { ILoginUser } from "../interfaces/ILoginUser";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users: User[] = await getAllUsersService();
    res.status(200).json(users);
  } catch (error) {
    if (error instanceof Error) res.status(400).json({ error: error.message });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user: User | null = await getUserByIdService(Number(id));
    res.status(200).json(user);
  } catch (error) {
    if (error instanceof Error) res.status(400).json({ error: error.message });
  }
};

export const registerUser = async (req: Request, res: Response) => {
  try {
    const userDto: UserDto = {
      name: req.body.name,
      email: req.body.email,
      birthdate: new Date(req.body.birthdate),
      nDni: req.body.nDni,
    };
    const credentialDto: CredentialDto = {
      username: req.body.username,
      password: req.body.password,
    };
    const newUser: User = await createUserService(userDto, credentialDto);
    res.status(201).json(newUser);
  } catch (error) {
    if (error instanceof Error) res.status(400).json(error.message);
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const loginUser: ILoginUser | undefined = await loginUserService(
      username,
      password
    );
    res.status(200).json(loginUser);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message });
    }
  }
};
