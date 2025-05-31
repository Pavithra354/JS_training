// var with String (primitive)
var name = "Pavithra";
var name = "Narala";       // redeclaration allowed with var
name = "Pavithra Narala";  // reassignment allowed

// let with Number (primitive)
let age = 21;
age = 22;                 // reassignment allowed

// const with Boolean (primitive)
const isStudent = true;

// const with Null (primitive)
const userId = null;

// const with Symbol (primitive)
const uniqueId = Symbol('id');
const sym1 = Symbol('id');
const sym2 = Symbol('id');

console.log(sym1 === sym2);  // false, because each Symbol is unique
console.log(sym1.toString()); // "Symbol(id)"

// let with Undefined (primitive)
let status;               // undefined by default
status = "active";        // reassignment allowed

// const with BigInt (primitive)
const bigNumber = 12345678901234567890n;

// Log all variables together with labels
console.log({
  name,                          // String
  age,                           // Number
  isStudent,                     // Boolean
  userId,                        // Null
  uniqueId: uniqueId.toString(), // Symbol (converted to string)
  status,                        // Undefined -> now String
  bigNumber: bigNumber.toString()// BigInt (converted to string)
});