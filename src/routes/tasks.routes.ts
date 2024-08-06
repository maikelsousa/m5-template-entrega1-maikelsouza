import { Router } from "express";
import { TasksControllers } from "../controllers/tasks.controllers";
import { GlobalMiddlewares } from "../middlewares/global.middlewares";
import { taskSchemaUpdate, tasksSchemaCreate } from "../schemas/tasks.validadores";
import { TasksMiddlewares } from "../middlewares/tasks.middlewares";

export const tasksRouter = Router();

tasksRouter.post("/",TasksMiddlewares.verificadorCategoryBodyId, GlobalMiddlewares.validateSchema(tasksSchemaCreate), TasksControllers.create)
tasksRouter.get("/", TasksControllers.findMany)
tasksRouter.get("/:id", TasksMiddlewares.verificadorId, TasksControllers.find)
tasksRouter.patch("/:id", TasksMiddlewares.verificadorId, GlobalMiddlewares.validateSchema(taskSchemaUpdate), TasksControllers.patch)
tasksRouter.delete("/:id", TasksMiddlewares.verificadorId, TasksControllers.delete)




















