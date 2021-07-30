# TypeScript Tutorial #18 - Generics

## Generating a random UID
Down below you can see a function that generates a random uid for a user:
```ts
const addUID = (obj: object) => {
  let uid = Math.floor(Math.random() * 100);
  return {...obj, uid};
}

const docOne = addUID({name: 'yoshi', age: 40});
console.log(docOne.name);
```
At the end of the code you can see the <i>name</i> field of the <i>docOne</i> being consoled, but this doesn't work:
>Property 'name' does not exist on type '{ uid: number; }'.ts(2339)

Because the object is not well defined, TS doesn't know which fields are in the object.

## Using generics
To solve this, you can use <i>generics</i>. Let's see a code snippet and detail what is going on:
```ts
const addUID = <T>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return {...obj, uid};
}

const docOne = addUID({name: 'yoshi', age: 40});
console.log(docOne.name);
```
The only difference between this version of <i>addUID</i> and the previous one is the <i>\<T\>(obj: T)</i>. The <i>\<T\></i> captures the passed object to the function and now TS knows what are the fields of this object, so this time the <i>console.log</i> gives no error. The generic can be used with any other type, not only objects.

## Making generics more specific
If you pass a string to <i>addUID</i>, TS will say nothing, even though it doesn't make any sense to pass it a string. To go around this, you can <i>extend</i> a generics:
```ts
const addUID = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return {...obj, uid};
}

const docOne = addUID('hello');
``` 
Now, trying to pass the string <i>hello</i> to <i>addUID</i> will generate an error:
>Argument of type 'string' is not assignable to parameter of type 'object'.ts(2345)

## Making generics even more specific
To extend a generic to an even more specific object, you can write:
```ts
const addUID = <T extends {name: string}>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return {...obj, uid};
}

// Valid 
const docOne = addUID({name: 'yohsi', age: 40});
// Invalid
const docTwo = addUID({name: 40, age: 40});
const docThree = addUID({age: 40});
```
The <i>addUID</i> function only accepts objects that contain a field called <i>name</i> which is of type <i>string</i>.

## Generics with interfaces
If you have to pass to an interface a generic, you can do so as follows:
```ts
interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const docFour: Resource<string>;
docFour = {
  uid: 1,
  resourceName: 'its name',
  data: '2021'
}

const docFive: Resource<object> = {
  uid: 2,
  resourceName: 'another name',
  data: {day: '29', year: '2021'}
}
```
You can pass any type you want to <i>T</i>.

Why <i>T</i>? Well, the community uses it as a default, actually you can give it any name you want, although, <i>T</i> is the recommended name. You can think of it as "type".

## 📦 More content

If you want a video of this tutorial, check the one made by The Net Ninja: [TypeScript Tutorial #18 - Generics](https://www.youtube.com/watch?v=IOzkOXSz9gE&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=18).

Back to the [main branch](https://github.com/Henrique-Peixoto/typescript-the-net-ninja).
