import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/rotas.prisma";
import { ApiError } from "../erros/apiError";

export class TasksMiddlewares {
    static verificadorId = async (req: Request, res: Response, next: NextFunction) => {

        const taskId = +req.params.id;
        const task = await prisma.task.findFirst({ where: { id: taskId } })
        console.log(task);
        if (!task) {
            throw new ApiError("Task not found", 404);
        }
        next();
    }

    static verificadorCategoryBodyId = async (req: Request, res: Response, next: NextFunction) => {
        const categoryId = +req.body.categoryId;
        if (categoryId) {
            const category = await prisma.category.findFirst({ where: { id: categoryId } })
            if (!category) {
                throw new ApiError("Category not found", 404);

            }
        }


        return next();
    }
}