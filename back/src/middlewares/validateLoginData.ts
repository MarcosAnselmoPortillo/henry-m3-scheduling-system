import { Request, Response, NextFunction } from "express";

export const validateLoginData = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and Password are required" });
  } else if (typeof username !== "string" || typeof password !== "string") {
    return res
      .status(400)
      .json({
        message: "Invalid Username or Password! They should be strings.",
      });
  } else next();
};
