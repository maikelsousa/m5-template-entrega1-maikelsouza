import { NextFunction, Request, Response } from "express";
import { ZodError, ZodTypeAny } from "zod";
import { ApiError } from "../erros/apiError";

export class GlobalMiddlewares {
    static validateSchema = (schema:ZodTypeAny) =>(req:Request,res:Response, next: NextFunction)=>{
        
     try {
        req.body= schema.parse(req.body)
     } catch (error) {
        if (error instanceof ZodError) {
                
            return res.status(400).json({errors:error.errors});
        }        
        
     }  
        return next();
    }
}