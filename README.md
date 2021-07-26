# TypeScript Tutorial #10 - Function Signatures

## Function signatures
A <i>function signature</i> is a way to explicitly say how many parameters and their type a function should receive.
```ts
let greet: (a: string, b: string) => void;
```
Now, define a function within the pattern <i>greet</i>.
```ts
greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
}
```
If a parameter receives a wrong type, the following message is shown:
```ts
greet = (name: number, greeting: string) => {
  console.log(`${name} says ${greeting}`);
}
```
>Type '(name: number, greeting: string) => void' is not assignable to type '(a: string, b: string) => void'.
>  Types of parameters 'name' and 'a' are incompatible.
>    Type 'string' is not assignable to type 'number'.ts(2322)

Notice that the parameters names in the signature don't need to match the parameters name on the declaration, only the types have to be the same.

## Implicity return type
Although the function signature has an explicit return type, the function declaration doesn't need to:
```ts
let calc: (a: number, b: number, c: string) => number;

calc = (numberOne: number, numberTwo: number, action: string) => {
  if(action === 'add'){
    return numberOne + numberTwo;
  }else{
    return numberOne - numberTwo;
  }
}
```

## Function signature with object
You can define a function signature with an object:
```ts
let logDetails: (obj: {name: string, age: number}) => void;

logDetails = (ninja: {name: string, age: number}) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
}
```
You can also give this object a specific type and use this type on the function signature and declaration:
```ts
type person = {name: string, age: number};

let logDetails: (obj: person) => void;

logDetails = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
}
```

## Function signature with optional parameters
You can have a function signature with one or more optional parameters and they can appear or not on the function declaration:
```ts
let showCarDetails: (name: string, year: string, hasFourWheels?: boolean) => void;

// This declaration works
showCarDetails = (name: string, year: number) => {
  console.log(`The ${name} was first produced in ${year}`);
}

// This declaration also works
showCarDetails = (name: string, year: number, hasFourWheels?: boolean) => {
  console.log(`The ${name} was first produced in ${year}`);
  if(hasFourWheels){
    console.log('It has four wheels.');
  }else{
    console.log('It doesn\'t has four wheels.');
  }
}
```
You can mix this all togheter and create code that is reusable and readable.
## 📦 More content

If you want a video of this tutorial, check the one made by The Net Ninja: [TypeScript Tutorial #10 - Function Signatures](https://www.youtube.com/watch?v=TZNbzyY6hMU&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=10)

Back to the [main branch](https://github.com/Henrique-Peixoto/typescript-the-net-ninja).
