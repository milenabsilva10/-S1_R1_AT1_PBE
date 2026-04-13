import Categoria from "../models/CategoryModel.js"
import Produto from "../models/ProductModel.js"
import CategoriaRepository from "../repositories/CategoryRepository.js";
import ProductRepository from "../repositories/ProductRepository.js";


class CategoryService{

    async getALLCategory() {

return CategoriaRepository.getALLCategory()
}

    async desativar(id){

        //Verificando se a categoria existe
        if (!id || isNaN(id)){
            throw new Error("ID da categoria é obrigátorio!")
        }

        // Verificar se a categoria existe
        const categoria = CategoriaRepository.getById(id);

        if (!categoria){
            throw new Error("Categoria não encontrada!")
        }

        //desativando a categoria encontrada!
        await CategoriaRepository.updateStatus(id, 0)

        // Desativando produtos da categoria
        await CategoriaRepository.desativarPorCategorias(id);

        return {message: "Categoria e produtos desativados com sucesso"}
    }


    async createCategory(data) {

        const categoria = new Categoria(data)


        return CategoriaRepository.createCategory(categoria)
   
}

    async updateCategory(id, data){
        const categoria = new Categoria(data)

    return CategoriaRepository.updateCategory(id, categoria)
}

   async deleteCategory(id){
    const totalprodutos = await ProductRepository.countCategoria(id);

    if(totalprodutos > 0){
        throw new Error ("Não foi possivel excluir categorias com produtos vinculados a ela")
    }

    return  await CategoriaRepository.deleteCategory(id)
}

}

export default new CategoryService();