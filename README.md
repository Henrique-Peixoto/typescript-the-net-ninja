# TypeScript Tutorial #6 - Dynamic (any) Types
You can define a variable without a specific type, this kind of turns it back to a simple JS variable, because you can assign <i>any</i> value to this variable.
```ts
let age: any;
```
With this you could assign to <i>age</i> a string, a boolean, a number, etc.
```ts
age = '25';
age = 25;
```
To initialize a <i>any</i> variable, you can do
```ts
let age: any = 25;
```
And then assign any other value you want. Here, <i>25</i> does not mean that <i>age</i> has the type <i>number</i>, it's just a initialization value.
This can also be done with objects
```ts
let book: {
  name: any,
  pages: any
}
```
So, for the object above you can assign the following values without having problems
```ts
book = {
  name: 'The Hobbit',
  pages: 353
}

// or

book = {
  name: 353,
  pages: 'The Hobbit'
}
```
You can even define objects with <i>any</i> and explicit types all togheter
```ts
let ninja: {
  name: any,
  age: number
}
```
With this, you could have the following value
```ts
ninja = {
  name: true,
  age: 25
}

// or

ninja = {
  name: 'Ryu',
  age: 32
}
```
Here, you also have to respect the fields that have a well defined type. Even though a field of an object has the type <i>any</i>, when you assign a value to this object, you must give values to all of it's fields.

## 📦 More content
If you want a video of this tutorial, check the one made by The Net Ninja: [TypeScript Tutorial #6 - Dynamic (any) Types](https://www.youtube.com/watch?v=nm9P2vnS9_I&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=6)

Back to the [main branch](https://github.com/Henrique-Peixoto/typescript-the-net-ninja).