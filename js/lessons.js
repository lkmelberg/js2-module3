// modules intro

// import and export

import { addNumbers } from "./math.mjs";

const result = addNumbers(10, 10);

export { result };

// Naming of module files

// It’s the convention to use the .mjs extension for JavaScript module files instead of the .js extension e.g.

myModule.mjs;

// <script src="myFile.js"></script>

// Below is how we would import a JavaScript module.

// <script type="module" src="myModule.mjs"></script>

// If you tried to use import or export and did not specify `type=”module”, you would likely get the following error:

// Uncaught SyntaxError: Cannot use import statement outside a module (at main.mjs:1:1)
console.log("This is a module");
