//criando uma rota para meus usuarios
import express from "express"
import { getUsers } from "../controllers/user.js"

//indicando minha rota
const router = express.Router()

//indicando que o get vai ser na raiz dessa rota
router.get("/", getUsers)

export default router;