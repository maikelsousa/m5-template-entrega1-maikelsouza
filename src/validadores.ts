import { z } from "zod";
import { Task,Category } from "@prisma/client";

export {Task,Category}

export type ZTask = z.infer<typeof ZTipagemTask>;
export type ZCategory= z.infer<typeof ZTipagemQuest>

export interface IManagerCreate {
    id: number ,
  title: string,
  content : string,
  finished: boolean ,
  categoryId : number,
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
}

export type IUserCreate = Omit<IUser, 'id'>;

// export interface ZTipagemTask {
//   id: number ,
//   title: String,
//   content : String,
//   finished: Boolean ,
//   categoryId : number,
//   category : ICategory,
 
// }

// export interface ICategory{
//   id: number,
// name: string,
// task : Task[],
// }

const ZTipagemTask = z.object({
  id: z.number().min(1),
  title: z.string(),
  content: z.string(),
  finished: z.boolean().default(false),
  categoryId: z.number().int().positive().optional(),
  category: z.string(),
});

const ZTipagemQuest = z.object({
    id: z.number().min(1),
    name: z.string(),
})

