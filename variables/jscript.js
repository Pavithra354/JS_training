// var
var name = "Pavithra";
var name = "Reddy";   // ✅ Re-declaration allowed
name = "Narala";      // ✅ Re-assignment allowed

console.log(name);    // Narala

//let
let age = 22;
age = 23;            // ✅ Re-assignment allowed
// let age = 24;     // ❌ Re-declaration not allowed in same scope

console.log(age);    // 23
// block scope
{
  let course = "JavaScript";
  console.log(course);  // JavaScript
}
// console.log(course); // ❌ Error: course is not defined

//const
const country = "India";
// country = "USA";  // ❌ Error: Assignment to constant variable

console.log(country);  // India



const person = {
  name: "Pavithra",
  age: 21
};

person.age = 22;  // ✅ Allowed: object properties can be changed

// person = {};   // ❌ Not allowed: re-assigning the whole object