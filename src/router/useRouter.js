import { userController } from "../controller/userController.js"

export default function useRouter(app,options){
    
    app.get("/user", userController.users)

    app.post("/create", userController.createUserController)

}