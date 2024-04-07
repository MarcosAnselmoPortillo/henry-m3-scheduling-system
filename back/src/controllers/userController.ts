import { Request, Response } from "express";
import { IUser } from "../interfaces/IUser";
import {
  getAllUsersService,
  getUserByIdService,
  createUserService
} from "../services/userService";
import { IUserDto } from "../dtos/IUserDto";
import { ICredentialDto } from "../dtos/ICredentialDto";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users: IUser[] = await getAllUsersService();
    res.status(200).json(users);
  } catch (error) {
    if (error instanceof Error)
      res.status(400).json({ error: error.message });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user: IUser = await getUserByIdService(Number(id));
    res.status(200).json(user);
  } catch (error) {
    if (error instanceof Error)
      res.status(400).json({ error: error.message });
  }
};

export const registerUser = async (req: Request, res: Response) => {
  try {
    const userDto: IUserDto = {
      name: req.body.name,
      email: req.body.email,
      birthdate: new Date(req.body.birthdate),
      nDni: req.body.nDni,
    };
    const credentialDto: ICredentialDto = {
        username: req.body.username,
        password: req.body.password
    }
    const newUser: IUser = await createUserService(userDto, credentialDto);
    res.status(201).json(newUser);
  } catch (error) {
    if (error instanceof Error) res.status(400).json(error.message);
  }
};

export const loginUser = (req: Request, res: Response) => {
  res.send("Login del usuario a la aplicación");
};
