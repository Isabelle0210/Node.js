//assinatura dos metodos que serao utilizados para manipular o carrinho de compras do usuario logado na aplicacao.
//quais ações o carrinho pode fazer
//adicionar, remover, deletar, caclcular o total
import createItem from './item.js';

async function addItem(userCart, item) {
    userCart.push(item); //adiciona um item ao carrinho
}
async function calculateTotal(userCart) {
    //o reduce é um método que percorre o array e retorna um único valor de acordo com a função passada como parâmetro
    const result = userCart.reduce((total, item)=> total + item.subtotal(), 0);
    console.log(result);
}
async function deleteItem(userCart, name) {
    //findIndex procura qual o indice daquele vetor que tem o nome igual ao nome passado como parametro
    const index = userCart.findIndex((item)=> item.name === name)

    if(index !== -1){
        //o splice serve para remover um item do array
        userCart.splice(index, 1);
    }
}

async function removeItem(userCart, item) {

    //encontra o indice do item no carrinho
    const indexFound = userCart.findIndex((p)=> p.name === item.name)

    //caso nao encontre
    if(indexFound === -1){
        console.log('Item not found in cart');
        return;
    }

    // item > 1 subtrair 1 da quantidade, item = 1 remover item

    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1;
        return;
    }else if (userCart[indexFound].quantity === 1){
        userCart.splice(indexFound, 1);
    } 

    // const deleteIndex = index - 1; //transforma o index em um index valido para o array
    // if(index >= 0 && index < userCart.length){// aqui eu so to verificando se o index é maior ou igual a 0, e se o index é menor que o tamanho do array(limite maximo do carrinho)
    //     userCart.splice(deleteIndex, 1);//remove um item do carrinho
    // }
}
async function displayCart(userCart) {
    console.log('Shopee cart list:')
    userCart.forEach((item, index)=>{ // o forEach percorre o array e executa a função passada como parâmetro para cada item do array
        console.log(`${index + 1} - ${item.name} - ${item.price} - ${item.quantity} | Subtotal = ${item.subtotal()}`);
    })
}
export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart,
}

