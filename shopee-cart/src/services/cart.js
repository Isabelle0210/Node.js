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

async function removeItem(userCart, index) {
    
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

