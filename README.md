# TypeScript Tutorial #8 - Function Basics

## Functions
A variable can store a function, as in the example below
```ts
let greet = () => {
  console.log('Hello, World!');
}
```
If you try to give this variable another value that is not a function, TS will say this
>Type 'string' is not assignable to type '() => void'.

To say, beforehand, that a variable is a function, you can use the <i>Function</i> key word (yes, with a capital "F")
```ts
let greet: Function;

greet = () => {
  console.log('Hello, World!');
}
```
You can even combine this with the parameter types
```ts
let add: Function;

add = (a: number, b: number) => {
  console.log(a + b);
}

add(5,10);
```
There are to straightforward ways to declare a optional parameter, the first one is using a question mark after the parameter name and the second one is to give the parameter a default value

```ts
const add = (a: number, b: number, c?: number | string) => {
  console.log(a + b);
  console.log(c);
}

add(5,10);
add(5,10,15);
```
```ts
const add = (a: number, b: number, c: number | string = 10) {
  console.log(a + b);
  console.log(c);
}

add(5,10);
add(5,10,'hi');
```
Notice that you should not use the question mark and a default value at the same time.
>Parameter cannot have question mark and initializer.

## Function return
If a function have no return value, it returns a void. A void is not the same as <i>undefined</i> neither <i>null</i>, is the lack of any value. When you hover over the function declaration on the VSCode, the following is shown (consider the function add2 of the sandbox.ts)
```ts
const add2: (a: number, b: number, c?: string | number | undefined) => void
```
You can explicitly say that the value returned by a function is void by doing
```ts
const add = (a: number, b: number: c?: string | number): void => {
  console.log(a + b);
  console.log(c);
}
```
You can make this function return a <i>number</i> instead of a void, just by writing
```ts
const add = (a: number, b: number): number => {
  return a + b;
}
```

## 📦 More content
If you want a video of this tutorial, check the one made by The Net Ninja: [TypeScript Tutorial #8 - Function Basics](https://www.youtube.com/watch?v=jXoSaX_yFh4&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=8)

Back to the [main branch](https://github.com/Henrique-Peixoto/typescript-the-net-ninja).