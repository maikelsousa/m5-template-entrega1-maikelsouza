import { app } from "../app"
import { Express, Request, Response } from "express"
import { PrismaClient } from "@prisma/client";
import { CategoriesService } from "../services/categories.services";


export class CategoriesControllers {

static create= async(req:Request,res:Response) => {
    const dados = await CategoriesService.create(req.body);
    return res.status(201).json(dados);

}

static delete= async(req:Request,res:Response) => {
    const taskId = req.params.id
  await CategoriesService.delete(+taskId);
    return res.status(204).send();
}


}
/*tasks

POST

/tasks

GET

/tasks/:id

GET

/tasks/:id

PATCH

/tasks/:id

DELETE

/categories

POST

/categories/:id

DELETE*/