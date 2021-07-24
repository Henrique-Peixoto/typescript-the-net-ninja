# TypeScript Tutorial #7 - Better Workflow & tsconfig
It's very common to have the folders <i>public</i> and <i>src</i> in a project. What we want to become public, is our TS code. In order to do that, we have to convert the TS code into JS code, let's see how this can be done with <i>tsconfig.json</i>.

To create the <i>tsconfig.json</i> file, use the command
```bash
tsc --init
```
You will notice that now you have a new file called <i>tsconfig.json</i>. This file is used for making a lot of configurations on how TS code is compiled, among other things you can set.

Open this file you just created and change the following lines from
```json
"outDir": "./",             /* Redirect output structure to the directory. */
"rootDir": "./",            /* Specify the root directory of input files. Use to control the output 
```
to
```json
"outDir": "./public",       /* Redirect output structure to the directory. */
"rootDir": "./src",         /* Specify the root directory of input files. Use to control the output 
```
This means that every TS code that is inside the <i>src</i> folder will be compiled and saved in the <i>public</i> folder.
Now, if you type
```bash
tsc
```
on the terminal, every TS file that is in the <i>src</i> folder will be compiled as a JS file in the <i>public</i> folder.

But there is still something going wrong. If you create a TS file outside of the <i>src</i> folder and type the command <i>tsc</i> on the terminal, you will see the following error message on the terminal
```bash
henri@LAPTOP-VFSIPJDF MINGW64 ~/programacao/the-net-ninja/typescript-the-net-ninja (lesson-6)
$ tsc
error TS6059: File 'C:/project-path/typescript-the-net-ninja/app.ts' is not under 'rootDir' 'C:/project-path/typescript-the-net-ninja/src'. 'rootDir' is expected to contain all source files.
  The file is in the program because:
    Matched by include pattern '**/*' in 'C:/project-path/typescript-the-net-ninja/tsconfig.json'     

Found 1 error.
``` 
This error means that you have a TS file that is not in the <i>src</i> folder.

To specifie that you just want the files that are in the <i>src</i> folder to be compiled, you have to specifie which folders will be compiled in the <i>tsconfig.json</i> file.

Right before the last curly braces, write the following 
```json
"include": ["src"]
```
Run the <i>tsc</i> command again (remember to keep the TS file out of the <i>src</i> folder) and now you should see in the <i>public</i> folder only the JS files generated from the TS files in the <i>src</i> folder.

There is much more you can do with the <i>tsconfig.json</i> file. For more details, see the [documentation](https://www.typescriptlang.org/docs/handbook/compiler-options-in-msbuild.html#using-a-tsconfigjson).

## 📦 More content
If you want a video of this tutorial, check the one made by The Net Ninja: [TypeScript Tutorial #7 - Better Workflow & tsconfig](https://www.youtube.com/watch?v=Y4IiQY9dNRA&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=7)

Back to the [main branch](https://github.com/Henrique-Peixoto/typescript-the-net-ninja).