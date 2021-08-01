# TypeScript Tutorial #20 - Tuples

## Basic use of tuples
Tuples are used alongside with arrays:
```ts
let tup: [string, number, boolean] = ['Frodo', 1, true];

// Valid 
tup = ['Sam', 2, false];

// Invalid
tup = [2, false, 'Sam'];
```
You can only change a value for another value of the same type.

## Using tuples on the project
Instead of passing each value individualy to the Invoice and Payment class, use a tuple to be able to use the spread operator:
```ts
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
  // Using the spread operatos
  if(type.value === 'invoice'){
    doc = new Invoice(...values);
  }else{
    doc = new Payment(...values);
  }

  const ul = document.querySelector('ul')!;
  const list = new ListTemplate(ul);

  list.render(doc, type.value, 'end');
});
```
TypeScript doesn't know the type of whatever is inside <i>values</i> if you just use the spread operator without using a tuple.


## 📦 More content

If you want a video of this tutorial, check the one made by The Net Ninja: [TypeScript Tutorial #20 - Tuples](https://www.youtube.com/watch?v=tHSstkiVbc8&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=20).

Back to the [main branch](https://github.com/Henrique-Peixoto/typescript-the-net-ninja).
