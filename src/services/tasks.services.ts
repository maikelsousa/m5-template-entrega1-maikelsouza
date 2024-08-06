import { prisma } from "../database/rotas.prisma";
import { ITasksCreate, tasksSchemaReturn } from "../schemas/tasks.validadores";

export class TasksService {

    static create= async (payload: ITasksCreate) =>{

        return await prisma.task.create({data:payload})
    }

    static findMany= async (category?: string) =>{
        if (category){
            const tasks =  await prisma.task.findMany({include:{category:true}, where:{category:{name:{contains:category,mode:"insensitive"}}}})
            return tasksSchemaReturn.array().parse(tasks);
        }
        const tasks =  await prisma.task.findMany({include:{category:true}})
        return tasksSchemaReturn.array().parse(tasks);
    }

    static find= async (id:number) =>{
        const task =  await prisma.task.findFirst({where:{id},include:{category:true}}) 
        return tasksSchemaReturn.parse(task)
    }

     static patch= async (id: number, payload: any) =>{

        return await prisma.task.update({where: {id},data: payload})
    }
  
    static delete= async (id: number)=>{

        return await prisma.task.delete({where: {id}})
    }
}