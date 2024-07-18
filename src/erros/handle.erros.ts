import { NextFunction, Request, Response } from "express";
import { ApiError } from "./erros";
import { ZodError } from "zod";
import { BodyValidationError } from "./validador";

export function handleGlobalErrors(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
  
) {
  if (error instanceof BodyValidationError) {

    return res.status(error.statusCode).json(error.flatten().fieldErrors);
  }

  if (error instanceof ApiError) {
    return res.status(error.statusCode).json({ error: error.message });
  }

  console.log(error);
  return res.status(500).json({ error: "Internal Server Error" });
}
