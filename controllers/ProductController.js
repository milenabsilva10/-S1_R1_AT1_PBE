import ProdutosService from "../services/ProdutosService.js";

class ProductController{
    async index(req, res, next){
        try{
            const produtos = await ProdutosService.listar();
            res.json(produtos);
        } catch (error){
            // NEXT() --> Normalmente ele é chamado para passar para o proximo middleware ou rota
            next(error); // NEXT() --> Função que vamos utilizar para chamar o errorHandler
        }
    }

    async store(req, res, next){
        try{
            await ProdutosService.criarProduto(req.body);
            res.status(201).json({message:"Produto cadastrado com sucesso"});
        }catch(error){
            next(error)
        }
    }

    async update(req, res, next) {
    try{
        const {id} = req.params;
        
        await ProdutosService.atualizar(id, req.body)
        res.status(201). json({message:" Produto atualizado com sucesso!"})
    }catch (error){
        next(error)
    }
    
}


async  destroy(req, res, next) {
    try{
        const { id } = req.params;

        await ProdutosService.deletar(id);
        res.status(200).json({message: "Produto removido com sucesso!"})
    } catch (error) {
        next(error)
    }
}
}
export default new ProductController();