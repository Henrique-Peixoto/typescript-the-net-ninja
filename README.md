# TypeScript Tutorial #12 - Classes

## Classes
When you create a class you have to initialize it's fields:
```ts
class Invoice { 
  client: string;
  details: string;
  amount: number;
}
```
>Property 'client' has no initializer and is not definitely assigned in the constructor.ts(2564)

Here, the message is referencing the <i>client</i> field, but it could be any of the other fields.

Now, let's give this class a <i>constructor</i> and a <i>format</i> method and instanciate two <i>Invoice</i> objects:
```ts
class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice('Tolkien','a new The Lord of the Rings book', 500);
const invTwo = new Invoice('Martin','a new The Chronicles of Ice and Fire book', 300);
```

## Class as a type
You can now say that an array can only receive elements from the <i>Invoice</i> class:
```ts
const invoices: Invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo);
```
One thing you have to know is that the fields of the Invoice class are accessible outside of the class and can have their values changed for any instance of the Invoice class:
```ts
invOne.amount = 1000;
intTwo.client = 'H.P. Lovecraft';
```
You will find out how to avoid this behavior in the next class.

## 📦 More content

If you want a video of this tutorial, check the one made by The Net Ninja: [TypeScript Tutorial #12 - Classes](https://www.youtube.com/watch?v=OsFwOzr3_sE&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=12)

Back to the [main branch](https://github.com/Henrique-Peixoto/typescript-the-net-ninja).
