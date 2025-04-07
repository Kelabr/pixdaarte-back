import { app } from "./config/app.js";


app.listen({port:3333}, () =>{
    console.log("Rodando servidor na porta: http://localhost:3333")
})