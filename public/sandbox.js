"use strict";
// Public 
// class Invoice {
//   readonly client: string;
//   private details: string;
//   public amount: number;
//   constructor(c: string, d: string, a: number) { 
//     this.client = c;
//     this.details = d;
//     this.amount = a;
//   }
//   format() {
//     return `${this.client} owes $${this.amount} for ${this.details}`;
//   }
// }
// const invOne = new Invoice('Tolkien','a new The Lord of the Rings book', 500);
// const invTwo = new Invoice('Martin','a new The Chronicles of Ice and Fire book', 300);
// const invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// Private
// invoices.forEach(invoice => console.log(invoice.client, invoice.details, invoice.amount, invoice.format()));
// Readonly
// invOne.client = 'New Client';
// New way of defining class attributes
var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount) {
        this.details = details;
        this.amount = amount;
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
