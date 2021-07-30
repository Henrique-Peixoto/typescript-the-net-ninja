# TypeScript Tutorial #16 - Interfaces with Classes

## Classes using interfaces
You can create interfaces into separated files and export then. Create the folder <i>interfaces</i> inside the <i>src</i> folder and inside the <i>interfaces</i> folder create the file <i>HasFormatter.ts</i> and write the following content:
```ts
export interface HasFormatter {
  format(): string;
}
```
To use this interface in a class, you have to explicitly say that a certain class is using a certain interface. In this example the class <i>Invoice</i> is using the <i>HasFormatter</i> interface:
```ts
import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Invoice implements HasFomatter {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ){}

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}
```
If you comment the <i>format</i> method, TS will complain:
>Class 'Invoice' incorrectly implements interface 'HasFormatter'.
>  Property 'format' is missing in type 'Invoice' but required in type 'HasFormatter'.ts(2420)
>HasFormatter.ts(2, 3): 'format' is declared here.

Now, create a second class called <i>Payment</i> that also uses the <i>HasFormatter</i> interface:
```ts
import { HasFormatter } from '../interfaces/HasFormatter';

export class Payment implements HasFormatter {
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ){}

  format() {
    return `${this.recipient} is owed $${this.amount} for ${this.details}`;
  }
}
```

## More use cases

With the <i>HasFormatter</i> interface you can declare a variable to obey this interface and instansiate a <i>Payment</i> or <i>Invoice</i> object or even say that an array can only receive variables that obey the <i>HasFormatter</i> interface:
```ts
// Variable of HasFormatter
let docOne: HasFormatter;
let docTwo: HasFormatter;

// Trying to assigne a string to docOne
docOne = 'hello';

// An array of HasFormatter
let docs: HasFormatter[] = [];
```
If you try to assign to <i>docOne</i> or <i>docTwo</i> a value that is not of type <i>HasFormatter</i>, TS will say:
>Type 'string' is not assignable to type 'HasFormatter'.ts(2322)

## 📦 More content

If you want a video of this tutorial, check the one made by The Net Ninja: [TypeScript Tutorial #16 - Interfaces with Classes](https://www.youtube.com/watch?v=XPGFqx8Vg-Y&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=16).

Back to the [main branch](https://github.com/Henrique-Peixoto/typescript-the-net-ninja).
