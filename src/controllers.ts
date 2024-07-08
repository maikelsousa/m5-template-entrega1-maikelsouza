import { app } from "./app"
import { Express, Request, Response } from "express"
import { ManagerService } from "./services";
import { PrismaClient } from "@prisma/client";


export class Controllers {

static postagem= async(req:Request,res:Response) => {
    const dados = await ManagerService.create(req.body);
    return res.status(201).json(dados);
}


public requisicao= async(req:Request,res:Response) => {
    const dados = await ManagerService.findmany();
    return res.status(201).json(dados);
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