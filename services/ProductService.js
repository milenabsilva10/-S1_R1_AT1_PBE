import Produto from "../models/CategoryModel.js";
import Categoria from "../models/CategoryModel.js";
import ProdutoRepository from "../repositories/ProdutoRepository.js";
import {validarCamposObrigatorios, validarPreco, validarEstoque} from "../validators/product.validator.js"

class ProductService {
    async listar(){
        return await ProdutoRepository.getALL();
    }

    async criarProduto(data){
        validarCamposObrigatorios(data)
        validarPreco(data)
        validarEstoque(data)

           let categoria = await Categoria.getById(data.categoria_id)

        if (!categoria){
            throw new Error("Categoria não existe!")
        }

        if(categoria.status === 0){
            throw new Error ("Não é possivel cadastar produto em categoria desativada!")
        }

        if (data.destaque){
            const quantidadeDestaque = await ProdutoRepository.countDestaques();

        if (quantidadeDestaque >= 5){
            throw new Error("Limite de produtos em destaque foi atingido!");
        }
       
    }
        // Model --> Cuida da estrutura dos dados
        const produto = new Produto(data)


        //Repository --> Cuida do banco (INSERT, UPDATE, SELE)
        return await ProdutoRepository.createProduct(produto);
}

    async atualizar(id, data){
        if(!id){
            throw new Error("ID do Produto é obrigatório")
        }

        const produtoAtual = await ProdutoRepository.getById(id)

        if(!produtoAtual){
            throw new Error("Produto não encontrado!")
        }

        if (data.categoria_id){
            const categoria = await Categoria.getById(data.categoria_id)

        if (!categoria || categoria.status === 0){
            throw new Error("Categoria inválida ou desativada!")
        }
        }

        validarCamposObrigatorios(data);
        validarPreco(data);
        validarEstoque(data);

        if (data.destque && !produtoAtual.destaque){
            const quantidadeDestaque = await ProdutoRepository.countDestaques();
 
            if (quantidadeDestaque >= 5){
            throw new Error("Limite de produtos em destaque foi atingido!");
        }
    }

    const produto = new Produto(data)
    return await ProdutoRepository.updateProduct(id, produto);
}

    async deletar(id){
        if(!id){
            throw Error("ID do Produto é obrigatório")
        }

        return await ProdutoRepository.deleteProduct(id)
}
}

export default new ProductService()