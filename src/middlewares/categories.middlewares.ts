import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";
import { prisma } from "../database/rotas.prisma";
import { ApiError } from "../erros/apiError";

export class CategoriesMiddlewares {
         static verificadorId =async(req:Request,res:Response,next: NextFunction)=>{ 
            const categoryId = +req.params.id;
            const category = await prisma.category.findFirst({where:{id:categoryId}})
                if (!category){
                    throw new ApiError("Category not found", 404);
                    
                } 
                return next();
         }
    
    }