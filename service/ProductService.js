'use strict';


/**
 * endpoint for obtaining product list
 *
 * name String  (optional)
 * page Integer  (optional)
 * limit Integer  (optional)
 * returns ProductList
 **/
exports.product_productGET = function(name,page,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "count" : 5,
  "page" : 5,
  "products" : {
    "images" : [ "images", "images" ],
    "purchase_ok" : true,
    "is_published" : true,
    "sale_ok" : true,
    "active" : true,
    "list_price" : 1.4658129805029452,
    "type" : "type",
    "description_sale" : "description_sale",
    "name" : "name",
    "website_description" : "website_description",
    "id" : 0,
    "category" : {
      "complete_name" : "complete_name",
      "name" : "name",
      "id" : 6
    },
    "detailed_type" : "detailed_type",
    "default_code" : "default_code"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * endpoint for obtaining product detail
 *
 * id Integer 
 * returns Product
 **/
exports.product_productIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "images" : [ "images", "images" ],
  "purchase_ok" : true,
  "is_published" : true,
  "sale_ok" : true,
  "active" : true,
  "list_price" : 1.4658129805029452,
  "type" : "type",
  "description_sale" : "description_sale",
  "name" : "name",
  "website_description" : "website_description",
  "id" : 0,
  "category" : {
    "complete_name" : "complete_name",
    "name" : "name",
    "id" : 6
  },
  "detailed_type" : "detailed_type",
  "default_code" : "default_code"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

