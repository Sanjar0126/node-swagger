'use strict';

var utils = require('../utils/writer.js');
var Product = require('../service/ProductService');

module.exports.product_productGET = function product_productGET (req, res, next, name, page, limit) {
  Product.product_productGET(name, page, limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.product_productIdGET = function product_productIdGET (req, res, next, id) {
  Product.product_productIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
