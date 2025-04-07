import { getUsers } from "../model/userModel.js"


const userController = {

    async showOk(req, res){
        return res.send({message:"OK"})
    },

    async users(req, res){

        const users = await getUsers()

        res.send(users)
    }

}

export {userController}