let userID = "user123";
let pin = 7890;

// Logical AND ---> &&
console.log("The results of logical AND are:");

console.log(userID === "user123" && pin === 7890);
console.log(userID === "User123" && pin === 7890);
console.log(userID === "user123" && pin === 1234);
console.log(userID === "User123" && pin === 1234);

// Logical OR ---> ||
console.log("The results of logical OR are:");

console.log(userID === "user123" || pin === 7890);
console.log(userID === "User123" || pin === 7890);
console.log(userID === "user123" || pin === 1234);
console.log(userID === "User123" || pin === 1234);

// Login simulation
let enteredUserID = "user123";
let enteredPin = 7890;

if (enteredUserID === "user123" && enteredPin === 7890) {
    console.log("Login successful!");
} else if (enteredUserID === "user123" || enteredPin === 7890) {
    if (enteredUserID === "user123") {
        console.log("Incorrect PIN");
    } else {
        console.log("Incorrect User ID");
    }
} else {
    console.log("Login failed: Both credentials are incorrect");
}