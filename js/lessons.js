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


// module.mjs
function functionOne() {
  // code here
}

function functionTwo() {
  // code here
}

function functionThree() {
  // code here
}

// We only export functionOne and functionTwo
export { functionOne, functionTwo };

// When we want to import these functions into another file, we wil use the following code.

// main.mjs
import {functionOne, functionTwo};


import { functionOne as newFunctionName } from './module.mjs';

// ✅ This works
newFunctionName();

// ❌ This won't work as we have aliased 'functionOne' to be 'newFunctionName'.
functionOne();


function mainFunction() {
  // code here
}

export default mainFunction;

// When we import a “default export”, we don’t use the {} braces, we simply write the name we want to use:

import mainFunction from './module.mjs';

// Default imports can be named anything
// You can name your default import whatever you would like. You do not have to use the same name like you do with “named imports/exports”.
// In the example below, we default export a function functionOne but we import it as newFunctionName:

// module.mjs

function functionOne() {
  // code here
}

// We are using a default export, not a named export
// You can tell by the 'default' keyword and lack of
// {} curly braces
default export functionOne;

// main.mjs

// Here we import the default export from 'module.mjs'
// and called it 'newFunctionName'
import newFunctionName from './module.mjs';
