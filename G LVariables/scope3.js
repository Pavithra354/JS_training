// Global variable
var apple = "Global Apple";

function fruitBasket() {
  // Local variable (function scope)
  let mango = "Local Mango";

  if (true) {
    // Block-scoped variable
    let kiwi = "Block Kiwi";
    console.log("Inside block:");
    console.log("apple:", apple); // ✅ Global Apple
    console.log("mango:", mango); // ✅ Local Mango
    console.log("kiwi:", kiwi);   // ✅ Block Kiwi
  }

  console.log("Inside function, outside block:");
  console.log("apple:", apple); // ✅ Global Apple
  console.log("mango:", mango); // ✅ Local Mango
  // console.log("kiwi:", kiwi); // ❌ ReferenceError: kiwi is not defined
}

fruitBasket();

console.log("In global scope:");
console.log("apple:", apple); // ✅ Global Apple
// console.log("mango:", mango); // ❌ ReferenceError: mango is not defined
// console.log("kiwi:", kiwi);   // ❌ ReferenceError: kiwi is not defined