# TypeScript Tutorial #2 - Compiling TypeScript

## VSCode extensions
If you followed the installation tutorial on the first lesson, you should have VSCode installed on your computer. I am saying this because I am going to use a VSCode extension called [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) (which I recommend you to install as well).

With Live Server you will be able to run your HTML file on the browser without having to refresh the page every time you save your code at VSCode.

## Lesson Content
The extension of a TypeScript file is ".ts". You will notice that TypeScript is very similar to JavaScript, mostly because TS is an extension of JS.

### Compiling TypeScript
In order for the browser to understand TypeScript code, it must be converted to JavaScript code, we can do this by typing 
```bash
tsc <file_to_be_compiled>.ts <file_that_will_recieve_the_ts_compiled>.js
```
Here, "tsc" stands for TypeScript Compiler, which you installed in the last lesson (right?), the two arguments have self explanatory names.
But here is something nice know, if you have a file called "sandbox.ts" and another file called "sandbox.js", instead of doing 
```bash
tsc sandbox.ts sandbox.js
```
you could just type
```bash
tsc sandbox.ts
```
this will create a JS file with the same name of the TS file, except for the extension.

But this is kind of boring, because every time you change your TS you have to rerun the command above. Worry no more! Instead, you can just run the following command:
```bash
tsc sandbox.ts -w
```
The "-w" stands for "watching", now, every time you update your TS code it will be automatically converted into JS code.

## The compiled code
The first block of code down below is written on TS (very similar to JS code), the second one is the TS code converted onto JS code.
#### TypeScript
```ts
const character = 'Mario';
console.log(character);
const inputs = document.querySelectorAll('input');
inputs.forEach(input => console.log(input));
```
#### JavaScript
```js
var character = 'Mario';
console.log(character);
var inputs = document.querySelectorAll('input');
inputs.forEach(function (input) { return console.log(input); });
```

## 📦 More content
If you want a video of this tutorial, check the one made by The Net Ninja: [TypeScript Tutorial #2 - Compiling TypeScript](https://www.youtube.com/watch?v=iTZ1-85I77c&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=2)

Back to the [main branch](https://github.com/Henrique-Peixoto/typescript-the-net-ninja).
