//importando meu express para conexão com banco de dados
import express from "express";
import userRoutes from "./routes/users.js"
//importando meu cors
import cors from "cors";

//definindo uma constante para receber meu express
const app = express()

app.use(express.json)
//para não dá conflito no meu localhost
app.use(cors())
//Declarando a porta para rodar meu servidor
app.use("/", userRoutes)
app.listen(8800)
