'use strict';


/**
 * endpoint for retrieving order
 *
 * body ListParameterReq endpoint for retrieving order (optional)
 * returns OrderList
 **/
exports.orderGET = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "count" : 6,
  "orders" : [ {
    "note" : "note",
    "require_signature" : "require_signature",
    "require_payment" : "require_payment",
    "amount_total" : 7.386281948385884,
    "currency_rate" : 1.2315135367772556,
    "amount_tax" : 1.4894159098541704,
    "amount_untaxed" : 4.145608029883936,
    "date_order" : "date_order",
    "order_line" : {
      "price_unit" : 5.637376656633329,
      "qty_delivered_method" : "qty_delivered_method",
      "quantity" : 2.3021358869347655,
      "price_tax" : 6.027456183070403,
      "price_subtotal" : 7.061401241503109,
      "qty_delivered" : 9.301444243932576,
      "name" : "name",
      "state" : "state",
      "id" : 5,
      "create_date" : "create_date",
      "price_total" : 1.4658129805029452
    },
    "name" : "name",
    "currency" : {
      "symbol" : "symbol",
      "full_name" : "full_name",
      "name" : "name",
      "id" : 1,
      "currency_unit_label" : "currency_unit_label"
    },
    "state" : "state",
    "id" : 3,
    "user" : {
      "active" : true,
      "id" : 2,
      "login" : "login"
    },
    "picking_policy" : "picking_policy",
    "customer" : {
      "zip" : "zip",
      "website" : "website",
      "city" : "city",
      "active" : true,
      "display_name" : "display_name",
      "phone" : "phone",
      "street" : "street",
      "function" : "function",
      "commercial_company_name" : "commercial_company_name",
      "name" : "name",
      "id" : 0,
      "is_company" : true,
      "email" : "email"
    }
  }, {
    "note" : "note",
    "require_signature" : "require_signature",
    "require_payment" : "require_payment",
    "amount_total" : 7.386281948385884,
    "currency_rate" : 1.2315135367772556,
    "amount_tax" : 1.4894159098541704,
    "amount_untaxed" : 4.145608029883936,
    "date_order" : "date_order",
    "order_line" : {
      "price_unit" : 5.637376656633329,
      "qty_delivered_method" : "qty_delivered_method",
      "quantity" : 2.3021358869347655,
      "price_tax" : 6.027456183070403,
      "price_subtotal" : 7.061401241503109,
      "qty_delivered" : 9.301444243932576,
      "name" : "name",
      "state" : "state",
      "id" : 5,
      "create_date" : "create_date",
      "price_total" : 1.4658129805029452
    },
    "name" : "name",
    "currency" : {
      "symbol" : "symbol",
      "full_name" : "full_name",
      "name" : "name",
      "id" : 1,
      "currency_unit_label" : "currency_unit_label"
    },
    "state" : "state",
    "id" : 3,
    "user" : {
      "active" : true,
      "id" : 2,
      "login" : "login"
    },
    "picking_policy" : "picking_policy",
    "customer" : {
      "zip" : "zip",
      "website" : "website",
      "city" : "city",
      "active" : true,
      "display_name" : "display_name",
      "phone" : "phone",
      "street" : "street",
      "function" : "function",
      "commercial_company_name" : "commercial_company_name",
      "name" : "name",
      "id" : 0,
      "is_company" : true,
      "email" : "email"
    }
  } ],
  "page" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * endpoint for retrieving order
 *
 * id Integer 
 * returns OrderItem
 **/
exports.orderIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "note" : "note",
  "require_signature" : "require_signature",
  "require_payment" : "require_payment",
  "amount_total" : 7.386281948385884,
  "currency_rate" : 1.2315135367772556,
  "amount_tax" : 1.4894159098541704,
  "amount_untaxed" : 4.145608029883936,
  "date_order" : "date_order",
  "order_line" : {
    "price_unit" : 5.637376656633329,
    "qty_delivered_method" : "qty_delivered_method",
    "quantity" : 2.3021358869347655,
    "price_tax" : 6.027456183070403,
    "price_subtotal" : 7.061401241503109,
    "qty_delivered" : 9.301444243932576,
    "name" : "name",
    "state" : "state",
    "id" : 5,
    "create_date" : "create_date",
    "price_total" : 1.4658129805029452
  },
  "name" : "name",
  "currency" : {
    "symbol" : "symbol",
    "full_name" : "full_name",
    "name" : "name",
    "id" : 1,
    "currency_unit_label" : "currency_unit_label"
  },
  "state" : "state",
  "id" : 3,
  "user" : {
    "active" : true,
    "id" : 2,
    "login" : "login"
  },
  "picking_policy" : "picking_policy",
  "customer" : {
    "zip" : "zip",
    "website" : "website",
    "city" : "city",
    "active" : true,
    "display_name" : "display_name",
    "phone" : "phone",
    "street" : "street",
    "function" : "function",
    "commercial_company_name" : "commercial_company_name",
    "name" : "name",
    "id" : 0,
    "is_company" : true,
    "email" : "email"
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
 * endpoint for updating order
 *
 * body OrderCreate endpoint for updating order (optional)
 * id Integer 
 * returns Success
 **/
exports.orderIdPATCH = function(body,id) {
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
 * endpoint for creating order
 *
 * body OrderCreate endpoint for creating order (optional)
 * returns OrderCreateResponse
 **/
exports.orderPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "note" : "note",
  "access_token" : "access_token",
  "reference" : "reference",
  "orderline" : [ {
    "qty_delivered_method" : "qty_delivered_method",
    "order_partner_id" : 9,
    "product_id" : 2,
    "name" : "name",
    "currency_id" : 7,
    "product_uom_qty" : 3.616076749251911,
    "invoice_status" : "invoice_status"
  }, {
    "qty_delivered_method" : "qty_delivered_method",
    "order_partner_id" : 9,
    "product_id" : 2,
    "name" : "name",
    "currency_id" : 7,
    "product_uom_qty" : 3.616076749251911,
    "invoice_status" : "invoice_status"
  } ],
  "partner_id" : 5,
  "user_id" : 4,
  "name" : "name",
  "partner_invoice_id" : 2,
  "state" : "state",
  "id" : 6,
  "partner_shipping_id" : 0,
  "website_id" : 5,
  "currency_id" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

