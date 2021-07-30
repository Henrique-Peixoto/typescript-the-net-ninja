// Basic use of tuples
let tup: [string, number, boolean] = ['Frodo', 1, true];
// tup = [2, false, 'Sam'];

// Using tuples on the project
import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

// Form
const form = document.querySelector('.new-item-form') as HTMLFormElement;
// Inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  // Using tuples here
  let values: [string, string, number];
  values = [tofrom.value, details.value, amount.valueAsNumber];

  let doc: HasFormatter;
  if(type.value === 'invoice'){
    doc = new Invoice(...values);
  }else{
    doc = new Payment(...values);
  }

  const ul = document.querySelector('ul')!;
  const list = new ListTemplate(ul);

  list.render(doc, type.value, 'end');
});
