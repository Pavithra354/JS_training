{
  let apple = "red";
  const mango = "yellow";
  var kiwi = "green";

  console.log("Inside block:");
  console.log("apple:", apple); // ✅ red
  console.log("mango:", mango); // ✅ yellow
  console.log("kiwi:", kiwi);   // ✅ green
}

console.log("Outside block:");
console.log("kiwi:", kiwi);     // ✅ green (because var is not block scoped)
console.log("apple:", apple);   // ❌ ReferenceError
console.log("mango:", mango);   // ❌ ReferenceError