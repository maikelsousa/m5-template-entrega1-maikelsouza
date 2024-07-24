import { NextFunction, Request, Response } from "express";
import { ApiError } from "../erros/apiError";
import { ZodError } from "zod"

export class HandleErrors {
    static execute(
        error: Error,
        req: Request,
        res: Response,
        next:NextFunction,
    ) {
        if (error instanceof ZodError) {

            return res.status(400).json({ errors: error.errors });
        }

        if (error instanceof ApiError) {
            return res.status(error.statusCode).json({ message: error.message });
        }

        console.log(error);
        return res.status(500).json({ error: "Internal Server Error" })
    }

}
