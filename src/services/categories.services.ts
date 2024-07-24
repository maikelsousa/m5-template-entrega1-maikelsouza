import { prisma } from "../database/rotas.prisma";
import { ICategoriesCreator } from "../schemas/categories.validador";

export class CategoriesService {

    static create= async (payload: ICategoriesCreator) =>{

        return await prisma.category.create({data:payload})
    }

    static findMany= async () =>{

        return await prisma.category.findMany()
    }

    static find= async (id:number) =>{

        return await prisma.category.findFirst({where:{id}})
    }

     static patch= async (id: number, payload: any) =>{

        return await prisma.category.update({where: {id},data: payload})
        
    }
  
    static delete= async (id: number)=>{

        return await prisma.category.delete({where: {id}})
    }
}