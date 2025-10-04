//importar a conexão com o banco de dados e o tipo de dados sql
const {sql, getConnection} = require("../config/db")

const produtoModel = { 
    buscarTodos: async ()=>{
        try{
            const pool = await getConnection();

            let querySQL = "SELECT * FROM Produtos"; 

            const result = await pool.request(). query (querySQL);

            return result.recordset;

        }catch (error){
            console.error("Erro ao buscar produtos:", error);
            throw error;

        }
    }
};

module.exports = {produtoModel};