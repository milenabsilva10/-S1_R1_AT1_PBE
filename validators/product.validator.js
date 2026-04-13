export function validarCamposObrigatorios(produto){
    const camposObrigatorios = ["nome", "preco", "descricao"];
    const camposFaltandos = [];

    camposObrigatorios.forEach((campo) =>{
        if(produto[campo] === undefined || 
            produto[campo] === null || 
            produto[campo].toString().trim() === ""){
                // .trim() --> Serve para remover espaços
            camposFaltandos.push(campo)
        }
    })

    if (camposFaltandos.length > 0){
        // .join() --> É utilizado para juntar, transformar todos os elementos do array em uma unica string!
        // EXEMPLO 
        // const frutas = ["Maça", "Banana", "Uva"];
        // console.log(frutas.join() --> Maçã, banana, uva)
        // .join (" - ")
        throw new Error(`Campos obrigatórios não preenchidos`);
        
    }
}

    export function validarPreco (produto){
        // !== Sinal de diferente
        // typeof --> Determina o tipo de dado
        if (typeof produto.preco !== "number" || produto.preco <= 0){
            throw new Error("Preço deve ser um numero maior que zero!")
        }
    }

    export function validarEstoque (produto){
        if(produto.estoque === null || produto.estoque < 0){
            throw new Error ("Esroque não pode ser negativo!");
        }
    }