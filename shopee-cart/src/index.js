import createItem from "./services/item.js";
import *as cartService from "./services/cart.js";

const myCart = [];
const myWishlist = [];
console.log("Welcome to Shopee Cart!");

const item1 = await createItem("Camisa", 50, 30);
const item2 = await createItem("Calça", 100, 3);


await cartService.addItem(myCart, item1);
await cartService.addItem (myCart, item2);

await cartService.removeItem(myCart, item2)

await cartService.displayCart(myCart);



// await cartService.deleteItem(myCart, item1.name);//como no cart.js no delete item esta falando apenas do nome na hora de passar os parametros para deletar um item do carrinho passamos apenas o nome do item

console.log('shopping cart total is:');
await cartService.calculateTotal(myCart);