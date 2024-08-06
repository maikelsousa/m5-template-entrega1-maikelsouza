import { z } from "zod";
import { categoriesSchema } from "./categories.validador";


export type ZTask = z.infer<typeof tasksSchema>;

export interface ITasksCreate {
    id: number ,
  title: string,
  content : string,
  finished: boolean ,
  categoryId : number,
}


const tasksSchema = z.object({
  id: z.number().min(1),
  title: z.string(),
  content: z.string(),
  finished: z.boolean().default(false),
  categoryId: z.number().int().positive().optional(),
  category: categoriesSchema.nullish(),
});

export const tasksSchemaCreate = tasksSchema.omit({
  id:true,
  
})

export const taskSchemaUpdate = tasksSchemaCreate.partial();

export const tasksSchemaReturn = tasksSchema.omit({categoryId:true})
