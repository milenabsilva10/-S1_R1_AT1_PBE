class CategoryModel{

  constructor({ 
    nome,
    descricao,
    status
    }){
      this.nome = nome;
      this.descricao = descricao;
      this.status = status;
}
}
export default CategoryModel;










 



// async function getById(id) {
//     const [rows] = await pool.query('SELECT * FROM categorias WHERE id = ?', [id]);
//     return rows[0];   
// }

// async function updateStatus(id, status) {
//     const [rows] = await pool.query('UPDATE categorias SET status = ? ', [status, id]);
//     return rows;
// }
// async function getALLCategoryModel() {
     
// const[rows] = await pool.query('SELECT * FROM categorias');

// return rows
// }

// async function createCategoryModel(categorias) {
//     const {nome, descricao} = categorias;

//     const[result] = await pool.query(`INSERT INTO categorias (nome, descricao) VALUES (?, ?)`, [nome, descricao])
//      return result.insertId; 
// }

// async function updateCategoryModel(id, categorias){
//     const{
// nome, 
// descricao, 
// } = categorias;

// const[result] = await pool.query(`UPDATE categorias SET
// nome = ?,
// descricao = ?
// WHERE id =?
// `,[
// nome, 
// descricao,
// id
// ] )

// return result.affectedRows;
// }

// async function deleteCategoryModel(id) {
//     const [result] = await pool.query(`DELETE FROM categorias WHERE id = ?`, [id])
//     console.log(result)
//     return result.affectedRows;
// }

