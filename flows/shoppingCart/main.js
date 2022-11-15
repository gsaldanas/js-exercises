//import files
import rl, { keyIn } from "readline-sync";
import Product from "./modules/Product.js";
import Cart from "./modules/Cart.js";

//create products
const cola = new Product("Cola fles", 5, 10);
const chips = new Product("Paprika chips", 2.5, 4);
const Ketchup = new Product("Ketchup fles", 3.5, 1);
const bier = new Product("jupiler", 3.5, 10);
const kauwgom = new Product("Haribo", 1);

//create cart
const shoppingCart = new Cart();
shoppingCart.addProduct(cola);
shoppingCart.addProduct(chips);
shoppingCart.addProduct(Ketchup);
shoppingCart.addProduct(bier);
shoppingCart.addProduct(cola);

shoppingCart.showProducts();
shoppingCart.totalCostItems();
shoppingCart.numberOfProducts();

// shoppingCart.numberOfCartItems();
// shoppingCart.showProducts();
// shoppingCart.removeProduct(chips);
// shoppingCart.showProducts();
// shoppingCart.removeProduct(cola);
// shoppingCart.showProducts();
// shoppingCart.removeProduct(Ketchup);
// shoppingCart.showProducts();
// shoppingCart.removeProduct();
// shoppingCart.showProducts();
