// Global variables
let kiwi = "Global Kiwi";
var mango = "Global Mango";

function fruitBasket() {
    // Local variable
    let banana = "Local Banana";

    // Accessing global and local variables
    console.log("Inside function:");
    console.log("Kiwi:", kiwi);      // Global
    console.log("Mango:", mango);    // Global
    console.log("Banana:", banana);  // Local
}

fruitBasket();

console.log("\nOutside function:");
console.log("Kiwi:", kiwi);      // Global
console.log("Mango:", mango);    // Global
// console.log("Banana:", banana); // ❌ Error: banana is not defined (it's local)