import { prisma } from "./database/rotas.prisma";
import { IManagerCreate, IUserCreate } from "./validadores";
import * as bcrypt from "bcryptjs"

export class ManagerService {

    static create= async (payload: IUserCreate) =>{
      const criptoSenha = payload.password
        bcrypt.hash(criptoSenha,10)
        return await prisma.user.create({data:payload})
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