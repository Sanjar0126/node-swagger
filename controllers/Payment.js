'use strict';

var utils = require('../utils/writer.js');
var Payment = require('../service/PaymentService');

module.exports.paymeAdd_cardPOST = function paymeAdd_cardPOST (req, res, next, body) {
  Payment.paymeAdd_cardPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.paymeCard_listPOST = function paymeCard_listPOST (req, res, next) {
  Payment.paymeCard_listPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.paymeCard_removePOST = function paymeCard_removePOST (req, res, next, body) {
  Payment.paymeCard_removePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.paymeReceiptPOST = function paymeReceiptPOST (req, res, next, body) {
  Payment.paymeReceiptPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.paymeReceipt_payPOST = function paymeReceipt_payPOST (req, res, next, body) {
  Payment.paymeReceipt_payPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.paymeVerifyPOST = function paymeVerifyPOST (req, res, next, body) {
  Payment.paymeVerifyPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
