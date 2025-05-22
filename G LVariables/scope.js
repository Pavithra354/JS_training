// Global Scope
let apple = 'Global Apple';

function fruitBasket() {
  // Function Scope
  let mango = 'Function Mango';

  if (true) {
    // Block Scope
    let kiwi = 'Block Kiwi';

    console.log('Inside block:');
    console.log(apple); // Global
    console.log(mango); // Function
    console.log(kiwi);  // Block
  }

  console.log('Inside function:');
  console.log(apple); // Global
  console.log(mango); // Function
  // console.log(kiwi); // ❌ Error: kiwi is block-scoped
}

fruitBasket();

console.log('Outside function:');
console.log(apple); // Global
// console.log(mango); // ❌ Error: mango is function-scoped
// console.log(kiwi);  // ❌ Error: kiwi is block-scoped
