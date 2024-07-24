import "express-async-errors"
import express, { json } from "express";
import helmet from "helmet";
import { HandleErrors } from "./middlewares/handleErrors.middlewares";
import { tasksRouter } from "./routes/tasks.routes";
import { categoriesRouter } from "./routes/categories.routes";

export const app = express();
app.use(json());
app.use(helmet());

app.use("/tasks",tasksRouter)
app.use("/categories",categoriesRouter)
app.use(HandleErrors.execute)