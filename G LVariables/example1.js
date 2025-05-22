// Global variable
let apple = 'I am a global apple';

function fruitBasket() {
  // Local variables
  let mango = 'I am a local mango';
  let kiwi = 'I am a local kiwi';

  console.log('Inside function:');
  console.log(apple); // Access global variable
  console.log(mango); // Local to function
  console.log(kiwi);  // Local to function
}

fruitBasket();

console.log('Outside function:');
console.log(apple);  // Global variable
// console.log(mango); // ❌ Error: mango is not defined
// console.log(kiwi);  // ❌ Error: kiwi is not defined