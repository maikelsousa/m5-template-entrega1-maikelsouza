import { prisma } from "./database/rotas.prisma";
import { IManagerCreate } from "./validadores";

export class ManagerService {

    static create= async (payload: IManagerCreate) =>{

        return await prisma.task.create({data:payload})
    }

    static find= async (payload:number) =>{

        return await prisma.task.findFirst()
    }

    static findmany= async () =>{

        return await prisma.task.findMany()
    }

    // static update= async (payload: IManagerCreate) =>{

    //     return await prisma.task.update({data:payload})
    // }
    // static categoriCreate= async (payload: IManagerCreate) =>{

    //     return await prisma.task.create({data:payload})
    // }
    // static deletar= async (payload: IManagerCreate) =>{

    //     return await prisma.task.delete({data:payload})
    // }
}