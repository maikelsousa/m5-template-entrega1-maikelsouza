import { app } from "../app"
import { Express, Request, Response } from "express"
import { TasksService } from "../services/tasks.services";
import { PrismaClient } from "@prisma/client";


export class TasksControllers {

static create= async(req:Request,res:Response) => {
    const dados = await TasksService.create(req.body);
    return res.status(201).json(dados);

}


static findMany= async(req:Request,res:Response) => {
    const category = req.query.category
    const dados = await TasksService.findMany(category as string);
    
    return res.json(dados);
}

static find= async(req:Request,res:Response) => {
    const taskId = req.params.id
    const dados = await TasksService.find(+taskId);
    return res.json(dados);
}
static patch= async(req:Request,res:Response) => {
    const taskId = req.params.id
     const dados = await TasksService.patch(+taskId,req.body);
    return res.json(dados);
}

static delete= async(req:Request,res:Response) => {
    const taskId = req.params.id
  await TasksService.delete(+taskId);
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