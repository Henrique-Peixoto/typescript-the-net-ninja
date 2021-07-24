# TypeScript Tutorial #9 - Type Aliases

Let's say you have the following functions

```ts
const logDetails = (uid: string | number, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

// and

const greet = (user: { name: string, uid: string | number }) => {
  console.log(`${user.name} says hello`);
};
```
The parameters specification is long and detailed. You can use <i>type aliases</i> to make it more readable.
```ts
type StringOrNum = string | number;

// and

type objWithName = {name: string, uid: StringOrNum};
```
And now, the functions written above can be written just like the way you see below
```ts
const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
}

// and

const greet = (user: objWithName) => {
  console.log(`${user.name} says hello`);
}
```

## 📦 More content

If you want a video of this tutorial, check the one made by The Net Ninja: [TypeScript Tutorial #9 - Type Aliases](https://www.youtube.com/watch?v=AmpwfbdFYL8&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=9)

Back to the [main branch](https://github.com/Henrique-Peixoto/typescript-the-net-ninja).
