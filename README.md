# TypeScript Tutorial #17 - Rendering an HTML Template
You will create a class that represents a <i>ul</i> in which the Invoices and Payments will be shown. See down below how this class looks like:
```ts
import { HasFormatter } from "../interfaces/HasFormatter.js";

export class ListTemplate {
  // Attributes of this class
  constructor(
    private container: HTMLUListElement
  ){}

  // The method responsable for creating a new 'li'
  render(item: HasFormatter, itemHeading: string, itemPositionOnTheList: 'start' | 'end'){
    // The 'li' have two elements: a title and it's inner text
    const li = document.createElement('li');
    // The 'li' title, wether it is an Invoice or a Payment
    const h4 = document.createElement('h4');
    h4.innerText = itemHeading;
    li.append(h4);

    // The 'li' inner text
    const p = document.createElement('p');
    p.innerText = item.format();
    li.append(p);

    // Selecting where to put the new 'li'
    if(itemPositionOnTheList === 'start'){
      this.container.prepend(li);
    }else{
      this.container.append(li);
    }
  }
}
```
Now, on the app.ts, create the following structure. Every time you fill out the form and press 'Add' a new element will be added to the list:
```ts
import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

// Form
const form = document.querySelector('.new-item-form') as HTMLFormElement;
// Inputs within the form
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// Adding an event to the form
form.addEventListener('submit', (e: Event) => {
  // The default behavior of the 'submit' event is to refresh the page, so prevent that to happen
  e.preventDefault();

  // Selecting wether the doc is an Invoice or a Payment
  let doc: HasFormatter;
  if(type.value === 'invoice'){
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  }else{
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }

  // Selecting the 'ul' that is on the index.html
  const ul = document.querySelector('ul')!;
  const list = new ListTemplate(ul);

  // Passing the arguments to the render function (defined in the ListTemplate class)
  list.render(doc, type.value, 'end');
});

```
Go on and run the index.html with LiveServer and try to add some items.

## 📦 More content

If you want a video of this tutorial, check the one made by The Net Ninja: [TypeScript Tutorial #17 - Rendering an HTML Template](https://www.youtube.com/watch?v=X-mUYxLjqLY&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=17).

Back to the [main branch](https://github.com/Henrique-Peixoto/typescript-the-net-ninja).
