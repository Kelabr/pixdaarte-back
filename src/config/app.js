import fastify from "fastify";
import useRouter from "../router/useRouter.js";

const app = fastify()

app.register(useRouter,{prefix:"api"})


export {app}