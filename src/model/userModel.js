import {prisma} from "../config/db.js"

async function getUsers(){
    const users = await prisma.users.findMany()

    return users
}

async function createUser(nome, email, pix, cidade, senha){

    let user 
    
    try{
       user = await prisma.users.create({
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

    return user

}

async function loginUser(email, senha){
    let user

    try{
        user = await prisma.users.findUnique({
            where:{
                email:email
            }
        })
            
        }catch(error){
            console.error("Erro ao fazer login", error)
        }

        return user

}


export {getUsers, createUser, loginUser}