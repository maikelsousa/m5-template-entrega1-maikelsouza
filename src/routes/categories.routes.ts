// /post 
// /delete
import {CategoriesControllers} from "../controllers/categories.controllers"
import { Router } from "express";
import { GlobalMiddlewares } from "../middlewares/global.middlewares";
import { categoriesSchemaCreate } from "../schemas/categories.validador";
import { CategoriesMiddlewares } from "../middlewares/categories.middlewares";


export const categoriesRouter = Router();

categoriesRouter.post("/", GlobalMiddlewares.validateSchema(categoriesSchemaCreate),CategoriesControllers.create)
categoriesRouter.delete("/:id", CategoriesMiddlewares.verificadorId, CategoriesControllers.delete)