function Cart(cartId = createId()) {
  this.cartId = cartId;
  this.cartItems = [];
}

const createId = function () {
  return Math.random().toString(36).substring(2);
};

Cart.prototype.addProduct = function (product) {
  if (this.cartItems.length >= 5) {
    console.log("Maximum amout of items reached.");
    return;
  }
  this.cartItems.push(product);
};
Cart.prototype.showProducts = function () {
  console.log("-------------------------");
  console.log("Current items in the cart");
  console.log("-------------------------");
  if (this.cartItems.length === 0) {
    console.log("No items yet.");
    return;
  }
  this.cartItems.forEach((element) => {
    element.displayProduct();
  });
};

Cart.prototype.removeProduct = function (product = {}) {
  console.log("The removed item is -->" + product.productTitle);
  let index = this.cartItems.indexOf(product);
  if (index == -1) {
    console.log("This product doesn't exist anymore.");
  }
  this.cartItems.splice(index, 1);
};

Cart.prototype.removeItemById = function (id) {
  let index;
  //find index by ID
  this.cartItems.forEach((value, key) => {
    if (value.productId == id) {
      index = key;
    }
  });
  console.log("The removed item is -->" + this.cartItems[index].productTitle);
  //remove element from index
  this.cartItems.splice(index, 1);
};

Cart.prototype.numberOfCartItems = function () {
  console.log("Number of items: " + this.cartItems.length);
};

Cart.prototype.numberOfProducts = function () {
  let totalProducts = 0;
  totalProducts = this.cartItems.reduce(function (acc, element) {
    return acc + element.amount;
  }, 0);
  console.log("The total amount of products : " + totalProducts);
  return totalProducts;
};

Cart.prototype.totalCostItems = function () {
  let total = 0;
  total = this.cartItems.reduce(function (acc, element) {
    return acc + element.productPrice;
  }, 0);
  console.log("The total cost of the products is: " + total + "€");
  return total;
};

export default Cart;
