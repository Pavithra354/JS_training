import {
  setCustomer,
  deposit,
  getBalance,
  greet
} from "./bank.js";

setCustomer("Pavi", 1000);
console.log(greet());               // Hello, Alice! Welcome to State Bank of India. Your balance is ₹1000.

deposit(500);
console.log("Balance:", getBalance()); // Balance: 1500

console.log(greet());               // Hello, Pavi! Welcome to State Bank of India. Your balance is ₹1500.