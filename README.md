# TypeScript Tutorial #14 - Modules
The reason for using modules is to keep your project organized. When you have to create lots and lots of files to accommodate your code, it would be strongly recommended to separate your files by, for example, functionality. A specific folder for authentication, a folder for components, and so on.

## Setting tsconfig
You have to set TS to use modules. Go to you tsconfig.json file and change the following values:
```json
...
  "target": "es5",      /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', 'ES2021', or 'ESNEXT'. */
  "module": "commonjs", /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
...
```
To:
```json
  "target": "es6",      /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', 'ES2021', or 'ESNEXT'. */
  "module": "es2015", /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
```
You also have to change the following line on the index.html file from:
```html
<script src='sandbox.js'></script>
```
To:
```html
<script type="module" src='app.js'></script>
```
This way, you will be saying that you are using modules instead of a simple file to hold all of your JS code (remember that the TS code gets converted into JS code).

## Exporting and Importing modules
Now, let's create a module for the Invoice class. Create the following folder structure:
![Folder structure](C:\Usuários\henri\Área de Trabalho\Captura.png)

Don't forget to use the <i>tsc -w</i> to compile your TS files!

On the <i>Invoice.ts</i> file, write the Invoice class:
```ts
export class Invoice {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ){}

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}
```
Notice the <i>export</i> keyword before the class declaration. This is necessary for when you want to export what is inside of a file, making it's content accessible outside of the file.

To use the Invoice class on the app.ts, you have to import it:
```ts
import { Invoice } from './classes/Invoice.js';
```
There are three main things to undertand here:
1. Use the <i>import</i> keyword to have access to the code you are importing;
2. The curly braces syntax is necessary when you only use <i>export</i> (in this case, an object with all the things you exported is accessible and you just have to import the parts you will use) instead of <i>export default</i> (is this case, only one thing is exported and you don't have to use the curly braces);
3. The file extension is <i>.js</i>, not <i>.ts</i>. This happens because all of the TS code is converted onto JS code.

Using modules has two major drawbacks:
1. Older browser don't have support for this feature, so you application might not load or, if it loads, it may no work properly;
2. Notice that all the folder structure created in the src folder is entirely replicated in the public folder when the files are compiled. Because of this, the browser needs to make one HTTP request for each of these file and this causes to consume more network. To solve this you could use Webpack, which bundle your code in one file, and the browser just needs to make one HTTP request.

## 📦 More content

If you want a video of this tutorial, check the one made by The Net Ninja: [TypeScript Tutorial #14 - Modules](https://www.youtube.com/watch?v=EpOPR03z4Vw&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=14&t=3s).

Back to the [main branch](https://github.com/Henrique-Peixoto/typescript-the-net-ninja).
