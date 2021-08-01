# TypeScript Tutorial #19 - Enums

## Interfaces without enums
On the last class you saw the use of <i>generics</i>. But it can become quite confusing to use generics too many times:
```ts
interface Resource<T> {
  uid: number;
  resourceName: number;
  data: T;
}

const docOne: Resource<string> = {
  uid: 0,
  resourceName: 0,
  data: 'today'
}

const docTwo: Resource<object> = {
  uid: 1
  resourceName: 4,
  data: {day: '30', year: '2021'}
}
```

## Interfaces with enums
As you keep creating these <i>docs</i>, it starts to become hard to remember which type <i>0</i> or <i>1</i> refers to. To go around this issue you can use <i>enums</i>:
```ts
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON };

interface Resource<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

const docOne: Resource<string> = {
  uid: 0,
  resourceType: ResourceType.BOOK,
  data: 'today'
}

const docTwo: Resource<object> = {
  uid: 1,
  resourceType: ResourceType.PERSON,
  data: {day: '30', year: '2021'}
}
```
If you console <i>docOne</i> and <i>docTwo</i> you will see that the <i>ResourceType.RESOURCE_NAME</i> becomes a number.

## 📦 More content

If you want a video of this tutorial, check the one made by The Net Ninja: [TypeScript Tutorial #19 - Enums](https://www.youtube.com/watch?v=r8G7-hQG07o&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=19).

Back to the [main branch](https://github.com/Henrique-Peixoto/typescript-the-net-ninja).
