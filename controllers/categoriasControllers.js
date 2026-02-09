import Categorias from '../models/categorias.js'

async function index(req, res) {
    try{
    const categorias = await Categorias.getALLCategory();
   return res.json(categorias);
}   catch (error) {
    console.log(error);
    return res.status(500).json({error:"Erro ao buscar categorias"});
}  
}

async function store(req, res) {
    try {
        const categorias = req.body;

        await Categorias.createCategory(categorias);
        res.status(201).json({message: "Novas Categorias cadastradas com sucesso!"});
    } catch (error) {
        res.status(500).json({error:"Erro ao criar categoria" });
    }
}

async function update(req, res) {
    try{
        const {id} = req.params;
        const categorias = req.body;

        await Categorias.updateCategory(id, categorias)
        res.status(201). json({message:" Categorias atualizadas com sucesso!"})
    }catch (error){
        res.json({error:"Erro ao atualizar categorias"})
    }
    
}


async function destroy(req, res) {
    try{
        const { id } = req.params;

        await Categorias.deleteCategory(id);
        res.status(200).json({message: "Categorias removidas com sucesso!"})
    } catch (error) {
        res.json({ message: "Erro ao remover as categorias! "})
    }
}

export default {index, store, update, destroy}
