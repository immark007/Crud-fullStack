//impotando o banco de dados
import {db} from "../db.js"

export const getUsers = (_, res) => {
    //selecionando todos os meus usuários
    const q = "SELECT * FROM usuarios";

    //pegando meu banco de dados e verificando se vai dar algum erro
    db.query(q, (err, data) => {
        if(err) return res.json(err);

        //Se caso der tudo certo ele vai me retornar método 200
        return res.status(200).json(data);
    });
};