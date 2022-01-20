'use strict';


/**
 * endpoint for Add new card
 *
 * body CardCreate endpoint for Add new card (optional)
 * returns CardResponse
 **/
exports.paymeAdd_cardPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : {
    "number" : "number",
    "owner_id" : 6,
    "expire" : "expire",
    "verify" : true,
    "recurrent" : true,
    "card_id" : 1,
    "token" : "token"
  },
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * endpoint for list cards
 *
 * returns CardListResp
 **/
exports.paymeCard_listPOST = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : [ {
    "id" : 1,
    "params" : {
      "code" : "code",
      "card_id" : 6
    }
  }, {
    "id" : 1,
    "params" : {
      "code" : "code",
      "card_id" : 6
    }
  } ],
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * endpoint for remove card
 *
 * body VerifyCardReq body (optional)
 * returns Success
 **/
exports.paymeCard_removePOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "success" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * endpoint for create receipt
 *
 * body CreateReceiptRequest body (optional)
 * returns ReceiptResponse
 **/
exports.paymeReceiptPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : {
    "cancel_time" : "cancel_time",
    "amount" : 5,
    "create_time" : "create_time",
    "user_id" : 2,
    "external_id" : "external_id",
    "state" : 6,
    "id" : 5,
    "order_id" : 1,
    "pay_time" : "pay_time"
  },
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * endpoint for pay receipt
 *
 * body ReceiptPayReq body (optional)
 * returns Success
 **/
exports.paymeReceipt_payPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "success" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * endpoint for verifying new card
 *
 * body VerifyCardReq body (optional)
 * returns CardResponse
 **/
exports.paymeVerifyPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : {
    "number" : "number",
    "owner_id" : 6,
    "expire" : "expire",
    "verify" : true,
    "recurrent" : true,
    "card_id" : 1,
    "token" : "token"
  },
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

