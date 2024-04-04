import { Request, Response } from 'express';

export const getUsers = (req: Request, res: Response) => {
    res.send('Obtener el listado de todos los usuarios');
};

export const getUserById = (req: Request, res: Response) => {
    res.send('Obtener el detalle de un usuario específico');
};

export const registerUser = (req: Request, res: Response) => {
    res.send('Registro de un nuevo usuario');
};

export const loginUser = (req: Request, res: Response) => {
    res.send('Login del usuario a la aplicación');
};