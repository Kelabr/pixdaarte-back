import fastify from "fastify";
import useRouter from "../router/useRouter.js";
import cors from "@fastify/cors"
import fastifyCookie from "@fastify/cookie";

const app = fastify()

app.register(fastifyCookie)
app.register(cors, {
    origin:"http://localhost:3000",
    credentials:true
})
app.register(useRouter,{prefix:"api"})




export {app}