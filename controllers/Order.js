'use strict';

var utils = require('../utils/writer.js');
var Order = require('../service/OrderService');

module.exports.orderGET = function orderGET (req, res, next, body) {
  Order.orderGET(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.orderIdGET = function orderIdGET (req, res, next, id) {
  Order.orderIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.orderIdPATCH = function orderIdPATCH (req, res, next, body, id) {
  Order.orderIdPATCH(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.orderPOST = function orderPOST (req, res, next, body) {
  Order.orderPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
