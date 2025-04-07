import {prisma} from "../config/db.js"

async function getUsers(){
    const users = await prisma.users.findMany()

    return users
}


export {getUsers}