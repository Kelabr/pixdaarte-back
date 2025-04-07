import { getUsers, createUser } from "../model/userModel.js"


const userController = {

    async showOk(req, res){
        return res.send({message:"OK"})
    },

    async users(req, res){

        const users = await getUsers()

        res.send(users)
    },

    async createUserController(req, res){
        const {nome, email, pix, cidade, password } = req.body

        try{
            await createUser(nome, email, pix, cidade, password)

            return res.status(200).send({message:"OK"})
        }catch(error){
            return res.staus(403).send({message:"Erro ao enviar requisição"})
        }

    }

}

export {userController}