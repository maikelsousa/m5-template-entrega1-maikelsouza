import "express-async-errors"
import express, { json } from "express";
import helmet from "helmet";
import { HandleErrors } from "./middlewares/handleErrors.middlewares";
import { tasksRouter } from "./routes/tasks.routes";
import { categoriesRouter } from "./routes/categories.routes";

export const app = express();
app.use(json());
app.use(helmet());

<<<<<<< HEAD
app.post("/categories", Controllers.postagem)

app.post("/users/login")
=======
app.use("/tasks",tasksRouter)
app.use("/categories",categoriesRouter)
app.use(HandleErrors.execute)
>>>>>>> b04357e1078a075eee42e3119f30703603c6ea48
