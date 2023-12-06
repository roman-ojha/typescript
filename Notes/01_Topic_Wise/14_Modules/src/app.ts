/*
  -> right now we are just making one file and writing code on that same file
  -> but in larger project we might have to divided all of the code on segment like: db connection, authentication, routing, script, other functions
  -> the best we that we can do it on typescript by using 'ES6' Module system where we can import and export things from different files when we need to
  -> so modern browser support vanilla javascript so we can just use them in typescript as well now, it's important to note though that only modern browsers support this feature out-of-the-box
  -> typescript doesn't compile module system down into older browser understand as well

  -> to work with module system if we have to configure 'tsconfig.json':
      -> {
        "compilerOptions": {
          "target": "es6" // change it to 'es6' because we are targeting to modern browser
          "module": "es2015" // add 2015 es module
        },
      }
  -> and go to index.html and use 'type="module"':
      -> <script type="module" src="app.js"></script>

  -> now we will create another file and cut 'Invoice' class code and past in that file
  -> now we have to import that class on this main file

  => IMPORTANT:
  -> now we can use module system but this feature is only allow for modern browser. for older browser you might get an error
  -> and secondly it doesn't bundle our code into single file the browser is still using module system to load separate files and make multiple request
  -> to solve that problem we can use webpack to bundle our code into single file then it will only have one network request
*/

import { Invoice } from "./classes/Invoice.js";
// we have to using .js file because it will compile to javascript after all
const invOne = new Invoice("mario", "work on the mario website", 250);
const invTwo = new Invoice("luigi", "work on the luigi website", 300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((inv) => {
  console.log(inv.format());
});

const formTag = document.getElementsByClassName("new-item-form")[0]!;
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#toFrom") as HTMLInputElement;
const detail = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

formTag.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, toFrom.value, detail.value, amount.valueAsNumber);
});
