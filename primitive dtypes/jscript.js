//string
let name = "Pavithra Narala";
let city = "Hyderabad";
console.log("Welcome, " + name + " from " + city);

//Number
let price = 2499.99;
let quantity = 2;
let total = price * quantity;
console.log("Total price: ₹" + total);


//Boollean
let isLoggedIn = true;
let hasSubscription = false;
console.log("Logged in:", isLoggedIn);


//un defined
let phoneNumber;
console.log("Phone number is:", phoneNumber); // Output: undefined

//Null
let selectedSeat = null;
console.log("Selected seat:", selectedSeat); // Output: null

//symbol
const empId = Symbol("id");
let employee = {
    name: "Pavithra",
    [empId]: 101
};
console.log("Employee ID:", employee[empId]);

//Bigint
let largeAmount = 999999999999999999999999999n;
let donation = 1000000000000000000n;
console.log("New amount: " + (largeAmount + donation) + "n");