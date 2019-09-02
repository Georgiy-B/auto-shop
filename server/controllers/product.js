const Product = require('../models/product');

module.exports.addProduct = function(productBody, callback) {
  let product = new Product(productBody);
  product.save(callback);
};

module.exports.getAllProducts = function(callback) {
  Product.find({}, callback);
};

module.exports.getProductById = function(id, callback) {
  Product.findById(id, callback);
};

module.exports.updateProduct = function(id, product, callback) {
  Product.findByIdAndUpdate(id, product, { new: true }, callback);
};

module.exports.deleteProduct = function(id, callback) {
  Product.findByIdAndDelete(id, callback);
};

module.exports.validate = function(product) {
  if (product instanceof Product) {
    return product.validateSync();
  } else if ({}.toString.call(product) === {}.toString()) {
    return (new Product(product)).validateSync();
  } else {
    throw new Error('Unexpected type of the argument');
  }
}