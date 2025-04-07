import fastify from "fastify";
import useRouter from "../router/useRouter.js";
import cors from "@fastify/cors"

const app = fastify()

app.register(useRouter,{prefix:"api"})
app.register(cors, {
    origin:"http://localhost:3000",
    credentials:true
})


export {app}