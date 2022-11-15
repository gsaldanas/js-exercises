function Product(
  productTitle,
  productPrice,
  amount,
  productId = generatetId()
) {
  this.productTitle = productTitle;
  this.productPrice = productPrice;
  this.amount = amount;
  this.productId = productId;
}
//create ID for each Cart
const generatetId = function () {
  return Math.random().toString(36).substring(2);
};
Product.prototype.displayProduct = function () {
  console.log(
    `Product:${this.productTitle} Price:${this.productPrice} Amount:${this.amount}`
  );
};
export default Product;
