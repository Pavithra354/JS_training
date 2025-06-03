//  Division and undefined variable
try {
  let result = 50 / 5;
  console.log("Division Result is:", result);

  // Error: 'data' is not defined
  let output = data + 10;
} catch (err) {
  console.log("An error occurred:", err);
} finally {
  console.log("This block always runs.\n");
}

//  Accessing undeclared variable
try {
  console.log(status); // status is not defined
} catch (error) {
  console.log("Error:", error);
}

// Accessing method on undefined variable
try {
  let message;
  console.log(message.length); // Error: Cannot read property 'length' of undefined
  console.log(message.toUpperCase());
} catch (error) {
  console.log("Exception:", error);
}

//  Array index check
try {
  let values = [11, 22, 33];
  console.log(values[10]); // undefined, not error
  console.log(values[-2]); // also undefined
} catch (error) {
  console.log("Error:", error);
}

// Invalid array creation
try {
  let newArr = new Array(-100); // Throws RangeError
} catch (error) {
  console.log("Error:", error);
}

// Calling null as function
try {
  let action = null;
  action(); // TypeError
} catch (e) {
  console.log("Error:", e);
}

// Calling undefined as function
try {
  let fun;
  fun(); // TypeError
} catch (e) {
  console.log("Error:", e);
}

//  Recursive call leading to stack overflow
function infiniteLoop() {
  infiniteLoop();
}
try {
  infiniteLoop();
} catch (e) {
  console.log("Error:", e);
}

//  No error case
try {
  let z = 200;
  let result = z + 50;
  console.log("Result is:", result);
} catch (e) {
  console.log("Error:", e);
}

// Validating function inputs
function subtract(a, b) {
  try {
    if (typeof a !== "number" || typeof b !== "number") {
      console.log("Inputs must be numbers");
    } else {
      return a - b;
    }
  } catch (error) {
    console.log("Error:", error);
  }
}
console.log("Subtraction result:", subtract(100, "hi"));

console.log("Type of true is:", typeof(true));