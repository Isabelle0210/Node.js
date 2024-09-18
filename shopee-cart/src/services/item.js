//o item pode calcular o subtotal, atualizar a quantidade e mostra o valor unitario

async function createItem(name, price, quantity) {
    return{
        name,
        price,
        quantity,
        subtotal: () => price * quantity,
    };
}

export default createItem;