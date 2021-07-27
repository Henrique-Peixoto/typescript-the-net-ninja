# TypeScript Tutorial #15 - Interfaces
Interfaces are useful to define the attributes and methods of a class. They may seen to do what a class do, but you can't create a new object based on the interface. Hopefully, this concept will get more clear on the following examples.

## Declaring an interface
Inside an interface you can declare attributes and methods:
```ts
interface isPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}
```
Let's declare a variable that uses the <i>isPerson</i> interface:
```ts
const me: isPerson = {}
```
If you just write that, TS will say:
>Type '{}' is missing the following properties from type 'isPerson': name, age, speak, spend. ts(2739)

So, you have to give the needed values:
```ts
const me: isPerson = {
  name: 'Henrique',
  age: 21,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log('I spent ', amount);
    return amount;
  }
}
```
If you just want to declare a isPerson variable but not to initialize it, you can do as follows:
```ts
let someone: isPerson;
```
You can say that a function parameter is of type isPerson:
```ts
const greetPerson = (person: isPerson): void => {
  console.log('Hello, ', person.name);
}
```



## 📦 More content

If you want a video of this tutorial, check the one made by The Net Ninja: [TypeScript Tutorial #15 - Interfaces](https://www.youtube.com/watch?v=VbW6vWTaHOY&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=15).

Back to the [main branch](https://github.com/Henrique-Peixoto/typescript-the-net-ninja).
