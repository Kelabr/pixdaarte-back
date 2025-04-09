import { SignJWT } from "jose"
import { getUsers, createUser, loginUser } from "../model/userModel.js"


const userController = {

    async showOk(req, res){
        return res.send({message:"OK"})
    },

    async users(req, res){

        const users = await getUsers()

        res.send(users)
    },

    async createUserController(req, res){

        let user 

        const {nome, email, pix, cidade, password } = req.body

        try{
            user = await createUser(nome, email, pix, cidade, password)
        }catch(error){
            return res.status(403).send({message:"Erro ao enviar requisição"})
        }

        const secretJWT = new TextEncoder().encode(process.env.SECRET_KEY)
        const token = await new SignJWT({nome:user.nome, id:user.id})
        .setProtectedHeader({alg:"HS256"})
        .setIssuedAt()
        .setExpirationTime("1h")
        .sign(secretJWT)

        res.setCookie("token", token, {
            httpOnly: true,
            path:"/",
            maxAge:3600,
            secure:false,
            sameSite:"Strict"
        })

        res.status(200).send({message:"Usuário criado"})


    },


    async login(req, res){
        const {email, senha} = req.body

        const user = await loginUser(email, senha)

        if(!user){
            res.status(404).send({message:"Usuário não encontrado"})
        }

        if(senha != user.senha){
            res.status(404).send({message:"Senha incorreta"})
        }

        const secretJWT = new TextEncoder().encode(process.env.SECRET_KEY)
        const token = await new SignJWT({nome:user.nome, id:user.id})
        .setProtectedHeader({alg:"HS256"})
        .setIssuedAt()
        .setExpirationTime("1h")
        .sign(secretJWT)

        res.setCookie("token", token, {
            httpOnly: true,
            path:"/",
            maxAge:3600,
            secure:false,
            sameSite:"Strict"
        })

        return res.status(200).send({message:"Usuário logado"})


    }

}

export {userController}