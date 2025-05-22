function outerFunction() {
  let apple = "Outer Apple";
  const mango = "Outer Mango";

  function innerFunction() {
    let kiwi = "Inner Kiwi";

    console.log("Inside innerFunction:");
    console.log("apple:", apple); // ✅ Accesses outer function variable
    console.log("mango:", mango); // ✅ Accesses outer function variable
    console.log("kiwi:", kiwi);   // ✅ Local to inner function
  }

  innerFunction();

  // console.log("kiwi:", kiwi); // ❌ ReferenceError: kiwi is not defined
}

outerFunction();