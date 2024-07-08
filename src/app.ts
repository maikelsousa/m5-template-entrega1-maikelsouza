import express, { json } from "express";
import helmet from "helmet";
import { Controllers } from "./controllers";

export const app = express();
app.use(helmet());
app.use(json());

app.post("/categories", Controllers.postagem)
