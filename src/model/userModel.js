import {prisma} from "../config/db.js"

async function getUsers(){
    const users = await prisma.users.findMany()

    return users
}

async function createUser(nome, email, pix, cidade, senha){
    try{
        await prisma.users.create({
            data:{
                nome:nome,
                email:email,
                chave_pix:pix,
                cidade:cidade,
                senha:senha
            }
        })        
    }catch(error){
        console.error("Erro ao cadastrar usuário", error)
        return
    }

    return "Usuário Cadastrado"

}


export {getUsers, createUser}