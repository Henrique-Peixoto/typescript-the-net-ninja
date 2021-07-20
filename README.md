# TypeScript Tutorial #3 - Type Basics

## The Types
Let's see a few examples of types in TS:
```ts
let character = 'mario';
let age = 30;
let isBlackBelt = false;
```
The "character" is a <i>string</i> (a chain of characters or chars), the "age" is a <i>number</i> (either an integer or a floating point) and the "isBlackBelt" is a <i>boolean</i>.

If we try to assign a new value to "character" of 20, it will yield the error "Type 'number' is not assignable to type 'string'". One thing to notice is that TS accepts single and double quotes to define a string, so 
```ts
let name = 'luigi';
let otherName = "mario";
```
are both valid strings.

So, basically, you can't change the type of a variable, but you can change it's content.
TypeScript uses <i>type inference</i>. What this means is that TS can "guess" the type of a variable based on it's content. You take a look at the two blocks of code above, you will notice that there is no explicit type declaration.
Quick question: what is the type of "isZero" on the example below?
```ts
let isZero = "true";
```
It's a string. Although it says "true", the word is wrapped into quotes, so be careful, this is not a boolean.

## Function Parameters
In the example below the parameter "diameter" does not have a type, so we could pass "hello" as a value to it, but this would give us a NaN and TS will not complain at all.
```ts
const circ = (diameter) => {
  return diameter * Math.PI;
}

console.log(circ('hello'));
```
In order to define a type to "diameter" we have to explicity declare it:
```ts
const circ = (diameter: number) => {
  return diameter * Math.PI;
}

console.log(circ('hello'));
```
Now, if we try to pass a string do "diameter", TS will say "Argument of type 'string' is not assignable to parameter of type 'number'". The JS code for this TS snippet is
```js
var circ = function (diameter) {
    return diameter * Math.PI;
};

console.log(circ('hello'));
```
Wait a second! Where is the type we defined right after "diameter"? Well, TS will check the types in compile time, not in run time, that's why you don't see the type on the JS equivalent code.

## 📦 More content
If you want a video of this tutorial, check the one made by The Net Ninja: [TypeScript Tutorial #3 - Type Basics](https://www.youtube.com/watch?v=iTZ1-85I77c&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=3)

Back to the [main branch](https://github.com/Henrique-Peixoto/typescript-the-net-ninja).
