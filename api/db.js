//configurando meu banco de dados SQL
import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "senha",
    database: "crud"
})