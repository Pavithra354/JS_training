// Global variable
var kiwi = "Green Kiwi";

function makeJuice() {
    // Local variables
    let mango = "Sweet Mango";
    const banana = "Ripe Banana";

    console.log("Inside makeJuice:");
    console.log("Kiwi:", kiwi);      // Global
    console.log("Mango:", mango);    // Local
    console.log("Banana:", banana);  // Local
}

makeJuice();

console.log("\nOutside makeJuice:");
console.log("Kiwi:", kiwi); // Global
// console.log("Mango:", mango); // ❌ Error: mango is not defined
// console.log("Banana:", banana); // ❌ Error: banana is not defined
