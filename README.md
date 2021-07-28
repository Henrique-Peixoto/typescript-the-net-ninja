# TypeScript Tutorial #13 - Public, Private & Readonly
Let's use the class <i>Invoice</i> created at the last lesson, if you don't remember how the class is:
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
```
## Public
Every class attribute is <i>public</i> by default, so the class above could have been written as follows: 
```ts
class Invoice {
  public client: string;
  public details: string;
  public amount: number;

...
```
Being a public attribute means you can access and modify it's value from outside and inside of the class.

## Private
You can only access <i>private</i> attributes within the class (as the format method does, when it access the <i>details</i> attribute):
```ts
class Invoice {
  public client: string;
  private details: string;
  public amount: number;

...
```
If you try to access a private attibute from outside of the class, you will find youself facing the following error message:
```ts
invoices.forEach(invoice => console.log(invoice.client, invoice.details, invoice.amount, invoice.format()));
```
>Property 'details' is private and only accessible within class 'Invoice'.ts(2341)

## Readonly
<i>Readonly</i> class properties can be, well, only read from outside of the class, they can only have their value setted within the constructor method:

```ts
class Invoice {
  readonly client: string;
  public details: string;
  public amount: number;
}

...
```

## New way of defining class attributes
Instead of declaring the attributes of a class right after the class name, you can use the following syntax:
```ts
class Invoice {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ){}

  ...
}
```
Notice that you must declare the access level of those properties, otherwise:
```ts
class Invoice {
  constructor(
    client: string,
    private details: string,
    public amount: number
  ){}

  ...
}
```
> Property 'client' does not exist on type 'Invoice'.ts(2339)

## 📦 More content

If you want a video of this tutorial, check the one made by The Net Ninja: [TypeScript Tutorial #13 - Public, Private & Readonly](https://www.youtube.com/watch?v=aYmnwDlPB8s&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=13)

Back to the [main branch](https://github.com/Henrique-Peixoto/typescript-the-net-ninja).
