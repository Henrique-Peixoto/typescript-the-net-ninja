# TypeScript Tutorial #4 - Objects & Arrays

## Arrays
If you create an array like this
```ts
const names = ['Gandalf', 'Saruman', 'Radagast'];
```
you can add new elements to it just by doing
```ts
names.push('Blue mage');
```
but if you try to add a number, for example
```ts
namus.push(3);
```
you will get the following error message
>Argument of type 'number' is not assignable to parameter of type 'string'.

Even with other syntax
```ts
names[0] = 3;
```
Results in
>Type 'number' is not assignable to type 'string'.

But what if you want to have an array with numbers and strings?

You can achieve that by declaring an array with numbers and string in it
```ts
const mixed = ['First string', 1, 2, 'Second string', 3];
```
And the following operations would be allowed
```ts
mixed.push('Third string');
mixed.push(4);
mixed[0] = 0;
```
You can see that in the last operation the value <i>'First string'</i> got replaced with the value <i>0</i>, which is perfectly normal in this case.

One thing you would not be able to do is to push a, let's say, <i>boolean</i> into the array. This would raise the following error
>Argument of type 'boolean' is not assignable to parameter of type 'string | number'.

## Objects
Let's create the <i>driver</i> object
```ts
let driver = {
  name: 'Charles Leclerc',
  team: 'Ferrari',
  winnings: 2
};
```
The following operations are all valid
```ts
driver.winnings = 3;
driver.name = 'Carlos Sainz'
```
But the following operations are not valid
```ts
driver.winnings = '25';
```
>Type 'string' is not assignable to type 'number'.
```ts
driver.birthplace = ['Spain', 'South Region'];
```
>Property 'birthplace' does not exist on type '{ name: string; team: string; winnings: number; }'.

You can assign a new value to an existing object. But there are a few things you should not do
* You can't add new fields;
* You can't remove fields;
* The fields must preserve their original name and type.
Let's see an example (here we are changing the <i>driver</i> object)
```ts
driver = {
  name: 'Max Verstappen',
  team: 'Red Bull',
  winnings: 11
}
```
Take a look at the errors that can happen if you don't follow the rules listed above
```ts
driver = {
  name: 'Max Verstappen',
  winnings: 11
}
```
>Property 'team' is missing in type '{ name: string; winnings: number; }' but required in type '{ name: string; team: string; winnings: number; }'.
```ts
driver = {
  name: 'Max Verstappen',
  team: 'Red Bull',
  winnings: 11,
  age: 22
}
```
>Type '{ name: string; team: string; winnings: number; age: number; }' is not assignable to type '{ name: string; team: string; winnings: number; }'.
>Object literal may only specify known properties, and 'age' does not exist in type '{ name: string; team: string; winnings: number; }'.
```ts
driver = {
  name: 'Max Verstappen',
  team: 'Red Bull',
  winnings: '11'
}
>Type 'string' is not assignable to type 'number'.ts(2322)
>sandbox.ts(14, 3): The expected type comes from property 'winnings' which is declared here on type '{ name: string; team: string; winnings: number; }'

## 📦 More content
If you want a video of this tutorial, check the one made by The Net Ninja: [TypeScript Tutorial #4 - Objects & Arrays](https://www.youtube.com/watch?v=157NopQ-chU&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=4)

Back to the [main branch](https://github.com/Henrique-Peixoto/typescript-the-net-ninja).