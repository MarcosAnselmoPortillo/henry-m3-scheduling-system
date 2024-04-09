import { NextFunction, Request, Response } from "express";
import { getUserByIdService } from "../services/userService";

export const validateUserId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId: number = req.body.userId || req.params.id; // Obtén el userId de los parámetros de la URL o del cuerpo de la solicitud
    if (!isNaN(Number(userId)) && Number.isInteger(Number(userId))) {
      // El ID es un número entero válido
      const userFound = await getUserByIdService(userId);
      if (!userFound) {
        return res
          .status(400)
          .json({ error: "El userId proporcionado no es válido." });
      }
      next();
    } else {
      // El ID no es un número entero válido
      res.status(400).send("El ID no es un número válido");
    }
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Ocurrió un error al validar el userId." });
  }
};
