import pool from "../database/connection.js";

async function getALLCategory() {
     
const[rows] = await pool.query('SELECT * FROM categorias');

return rows
}

async function createCategory(categorias) {
    const {nome, descricao} = categorias;

    const[result] = await pool.query(`INSERT INTO categorias (nome, descricao) VALUES (?, ?)`, [nome, descricao])
     return result.insertId; 
}

async function updateCategory(id, categorias){
    const{
nome, 
descricao, 
} = categorias;

const[result] = await pool.query(`UPDATE categorias SET
nome = ?,
descricao = ?
WHERE id =?
`,[
nome, 
descricao,
id
] )

return result.affectedRows;
}

async function deleteCategory() {
    const [result] = await pool.query(`DELETE FROM categorias WHERE id = ?`, [id])
    return result.affectedRows;
}
export default {getALLCategory, createCategory, updateCategory, deleteCategory}
