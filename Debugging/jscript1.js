const menu = {
  Burger: 120,
  Pizza: 250,
  Pasta: 180
};

function placeOrder(foodItem, quantity) {
  debugger; // Execution will pause here when DevTools are open

  if (!menu[foodItem]) {
    console.log("Sorry, we don't have that item.");
    return;
  }

  const total = menu[foodItem] * quantity;
  console.log(`You ordered ${quantity} ${foodItem}(s).`);
  console.log(`Total bill: ₹${total}`);
  console.log("Your order will be delivered soon!");
}

// Call the function to trigger the debugger
placeOrder("Burger", 3);