import { NextFunction, Request, Response } from "express";
import { validateUserIdForAppointment } from "../services/userService";

export const validateUserIdForAppointmentMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId: number = req.body.userId || req.params.userId; // Obtén el userId de los parámetros de la URL o del cuerpo de la solicitud

  try {
    const isValidUserId = await validateUserIdForAppointment(userId);
    if (!isValidUserId) {
      return res
        .status(400)
        .json({ error: "El userId proporcionado no es válido." });
    }
    next();
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Ocurrió un error al validar el userId." });
  }
};
