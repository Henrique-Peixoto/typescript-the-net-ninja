"use strict";
// Classes
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice('Tolkien', 'a new The Lord of the Rings book', 500);
var invTwo = new Invoice('Martin', 'a new The Chronicles of Ice and Fire book', 300);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
