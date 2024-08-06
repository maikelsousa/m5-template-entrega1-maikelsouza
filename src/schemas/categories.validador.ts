import { z } from "zod";


export type ZCateories = z.infer<typeof categoriesSchema>;

export interface ICategoriesCreator {
    id: number ,
  name: string,
 
}


 export const categoriesSchema = z.object({
  id: z.number().min(1),
  name: z.string(),
});

export const categoriesSchemaCreate = categoriesSchema.omit({
  id:true,
  
})