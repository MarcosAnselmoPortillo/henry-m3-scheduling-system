import { Request, Response, NextFunction } from "express";
import { isValidDateFormat } from "../utils/dateUtil";

export const validateUserData = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email, birthdate, nDni, username, password } = req.body;
  if (!name || !email || !birthdate || !nDni || !username || !password)
    return res.status(400).json({ message: "All fields are required" });
  if (typeof name !== "string")
    return res.status(400).json({ message: "Name must be a string" });
  if (typeof email !== "string")
    return res.status(400).json({ message: "Email must be a string" });
  if (!isValidDateFormat(birthdate)) 
    return res.status(400).json({ message: 'Birthdate must be a string with format YYYY-MM-DD' });
  if (typeof nDni !== "number")
    return res.status(400).json({ message: "NDNI must be a number" });
  if (typeof username !== "string")
    return res.status(400).json({ message: "Username must be a string" });
  if (typeof password !== "string")
    return res.status(400).json({ message: "Password must be a string" });
  next();
};
