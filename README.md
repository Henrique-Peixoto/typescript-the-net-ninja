# TypeScript Tutorial #11 - The DOM & Type Casting

## Exclamation point operator
When you try to grab a DOM element and, for example, try to output it or one of it's properties, like this:
```ts
const anchor = document.querySelector('a');

console.log(anchor.href);
```
TS will say:
>Object is possibly 'null'.ts(2531)

To explicity say to TS that you know that a variable is not null you can write a <i>exclamation point</i> after selecting a DOM element:
```ts
const anchor = document.querySelector('a')!;
```
If you hover over the <i>anchor</i> constant, you will see:
>const anchor: HTMLAnchorElement

TypeScript has a specific type for every HTML element.

## Type Casting 
On the <i>index.html</i> file there is a <i>form</i> element. If you select that element using:
```ts
const form = document.querySelector('form');
```
TypeScript will know, because of type inference, that the <i>form</i> constant is a <i>HTMLFormElement</i>. But the form element on the <i>index.html</i> has a class and if you select that form using that class, TypeScript will not be able to guess which type is the <i>form</i> constant.
To solve this, you can use the <i>as</i> keyword to cast the type of <i>form</i>:
```ts
const form = document.querySelector('.new-item-form') as HTMLFormElement;
```
Here is a more complex example:
```ts
const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(
    type.value,
    tofrom.value,
    details.value,
    amount.valueAsNumber
  );
})

```

## 📦 More content

If you want a video of this tutorial, check the one made by The Net Ninja: [TypeScript Tutorial #11 - The DOM & Type Casting](https://www.youtube.com/watch?v=hcuKd-Q_tP8&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=11)

Back to the [main branch](https://github.com/Henrique-Peixoto/typescript-the-net-ninja).
