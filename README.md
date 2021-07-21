# TypeScript Tutorial #5 - Explicit Types

## Simple variables
If you want to declare a variable but not to initialize it, you can do as follows
```ts
let character: string;
let age: number;
let isLoggedIn: boolean;
```
Again, if you try to assign an incorrect value to a variable, for example
```ts
age = '35';
```
In this case you will get
>Type 'string' is not assignable to type 'number'.

## Arrays
The same idea above goes for arrays
```ts
let cars: string[];
```
Here you are saying that <i>cars</i> is an array of string array. One thing to notice is that you are not initializing the array, so when you try to push something into it
```ts
cars.push('Lightning McQueen');
```
That is what you will receive
>Uncaught TypeError: cars is undefined

One simple way to solve this is just initializing the array with an empty array.
```ts
let cars: string[] = [];
```

## Union types
You can declare a variable expliciting the types it can hold
```ts
let id: string | number;
```
If you are declaring an array with union types, you have to use parentheses as shown below
```ts
let cars: (number | string)[] = [];
```
And again, you can only assign the proper values to these variables.

## Objects
This is how you can specifie that a variable is a object
```ts
let ninjaOne: object;
ninjaOne = {name: 'Naruto', age: 33};
```
Here is something tricky. You can assign an array to an object, basically because an array is an object
```ts
let ninjaOne: object;
ninjaOne = ['Hi'];
```
You can be much more specific when declaring an object
```ts
let ninjaTwo: {
  name: string,
  age: number,
  isHidden: boolean
}
```
And again, when giving this object a value you can't add new fiels, remove fields or change their names.
## 📦 More content
If you want a video of this tutorial, check the one made by The Net Ninja: [TypeScript Tutorial #4 - Objects & Arrays](https://www.youtube.com/watch?v=157NopQ-chU&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=4)

Back to the [main branch](https://github.com/Henrique-Peixoto/typescript-the-net-ninja).